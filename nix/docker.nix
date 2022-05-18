{ pkgs, bobapkgs, ... }:
let
  tag = "nix";
  wait-script = pkgs.stdenv.mkDerivation {
    name = "scripts";
    phases = [ "installPhase" ];
    installPhase = ''
      mkdir -p $out/scripts
      chmod +x $out/scripts
      cp ${./..}/ops/scripts/wait-for-l1-and-l2.sh $out/scripts/
      substituteInPlace $out/scripts/wait-for-l1-and-l2.sh \
        --replace '/bin/bash' '${pkgs.bash}/bin/bash' \
        --replace 'curl' '${pkgs.curl}/bin/curl' \
        --replace 'sleep' '${pkgs.coreutils}/bin/sleep'
    '';
  };
  scripts = pkgs.stdenv.mkDerivation {
    name = "scripts";
    phases = [ "installPhase" ];
    installPhase = ''
      mkdir -p $out/scripts
      chmod +x $out/scripts
      cp ${./..}/ops/scripts/deployer.sh $out/scripts/
      cp ${./..}/ops/scripts/wait-for-l1-and-l2.sh $out/scripts/
      substituteInPlace $out/scripts/deployer.sh \
        --replace '/bin/bash' '${pkgs.bash}/bin/bash' \
        --replace 'curl' '${pkgs.curl}/bin/curl'
      substituteInPlace $out/scripts/wait-for-l1-and-l2.sh \
        --replace '/bin/bash' '${pkgs.bash}/bin/bash' \
        --replace 'curl' '${pkgs.curl}/bin/curl' \
        --replace 'sleep' '${pkgs.coreutils}/bin/sleep'
      chmod +x $out/scripts/wait-for-l1-and-l2.sh
    '';
  };
in
{
  dtl-image = pkgs.dockerTools.buildImage {
    name = "dtl";
    tag = tag;
    runAsRoot = ''
      mkdir -p ./state-dumps
    '';
    contents = with pkgs; [
      curl
      bash
      jq
    ];
    config = {
      WorkingDir = "${bobapkgs."@eth-optimism/data-transport-layer"}/lib/node_modules/@eth-optimism/data-transport-layer";
      EntryPoint = [
        "${pkgs.nodejs}/bin/node"
        "${bobapkgs."@eth-optimism/data-transport-layer"}/dist/src/services/run.js"
      ];
    };
  };
  deployer-image =
    let
      optimism-contracts = bobapkgs."@eth-optimism/contracts";
    in pkgs.dockerTools.buildLayeredImage {
      name = "deployer";
      tag = tag;
      config = {
        Env = [ "PATH=${optimism-contracts}/bin/:${scripts}/scripts/:${pkgs.yarn}/bin/" ];
        WorkingDir = "${optimism-contracts}/contracts";
        Entrypoint = [
          "${pkgs.yarn}/bin/yarn"
          "--cwd"
          "${optimism-contracts}/contracts"
          "run"
          "deploy"
        ];
      };
    };
  boba-deployer-image =
    let
      boba-contracts = bobapkgs."@boba/contracts";
    in pkgs.dockerTools.buildImage {
      name = "boba_deployer";
      tag = tag;
      config = {
        Env = [ "PATH=${boba-contracts}/bin/:${scripts}/scripts/" ];
        WorkingDir = "${boba-contracts}/contracts";
        Entrypoint = [
          "${scripts}/scripts/wait-for-l1-and-l2.sh"
          "${scripts}/scripts/deploy.sh"
        ];
      };
    };
  # Adapted from ops/docker/Dockerfile.batch-submitter
  batch-submitter-image = let
    script = pkgs.stdenv.mkDerivation {
      name = "script";
      phases = [ "installPhase" ];
      installPhase = ''
        mkdir -p $out/scripts
        cp ${./..}/ops/scripts/batch-submitter.sh $out/scripts/
        substituteInPlace $out/scripts/batch-submitter.sh \
          --replace 'jq -r' '${pkgs.jq}/bin/jq' \
          --replace 'curl' '${pkgs.curl}/bin/curl'
        chmod +x $out/scripts/batch-submitter.sh
      '';
    };

  in pkgs.dockerTools.buildImage {
    name = "go-batch-submitter";
    tag = tag;
    contents = with pkgs; [
      # From nixpkgs
      cacert
      jq
    ];
    config = {
      Env = [
        "PATH=${bobapkgs."@eth-optimism/batch-submitter"}/bin/:${script}/scripts/"
      ];
      EntryPoint = [
        "${bobapkgs."@eth-optimism/batch-submitter"}/bin/batch-submitter"
      ];
    };
  };

  # Adapted from ops/docker/Dockerfile.geth
  l2geth-image =
    let
      l2geth = pkgs.stdenv.mkDerivation {
        name = "l2geth";
        phases = [ "installPhase" ];
        installPhase = ''
          mkdir -p $out/bin
          ln -s ${bobapkgs."@eth-optimism/l2geth"}/bin/geth $out/bin/geth
          cp ${./../.}/ops/scripts/geth.sh $out/bin/start
          substituteInPlace $out/bin/start --replace \
            'curl' \
            '${pkgs.curl}/bin/curl'
        '';
      };
    in pkgs.dockerTools.buildImage {
      name = "l2geth";
      tag = tag;
      contents = with pkgs; [
        # From nixpkgs
        cacert
        jq
      ];
      config = {
        ExposedPorts = {
          "8545" = {};
          "8546" = {};
          "8547" = {};
        };
        Env = [
          "PATH=${pkgs.coreutils}/bin/"
        ];
        EntryPoint = [
          "${l2geth}/bin/geth"
        ];
      };
    };
  hardhat-image = pkgs.dockerTools.buildLayeredImage {
    name = "l1_chain";
    tag = tag;
    config = {
      ExposedPorts = {
        "8545" = {};
      };
      Cmd = [ "${bobapkgs."@eth-optimism/hardhat-node"}/bin/hardhat" "node" "--network" "hardhat" ];
    };
  };
  gas-price-oracle-image = pkgs.dockerTools.buildImage {
    name = "boba_gas-price-oracle";
    tag = tag;
    config = {
      WorkingDir = "${bobapkgs."@boba/gas-price-oracle"}/lib/node_modules/@boba/gas-price-oracle";
      EntryPoint = [
        "${scripts}/scripts/wait-for-l1-and-l2.sh"
        "${pkgs.nodejs}/bin/node"
        "${bobapkgs."@boba/gas-price-oracle"}/bin/gas-price-oracle"
      ];
    };
  };
  monitor-image = pkgs.dockerTools.buildImage {
    name = "monitor";
    tag = tag;
    config = {
      WorkingDir = "${bobapkgs."@boba/monitor"}/lib/node_modules/@boba/monitor";
      Env = [ "PATH=${pkgs.nodejs}/bin/:${pkgs.yarn}/bin/" ];
      EntryPoint = [
        "${pkgs.yarn}/bin/yarn"
        "start"
      ];
    };
  };
  relayer-image =
    let
      relayer = bobapkgs."@eth-optimism/message-relayer";
      relayer-scripts = pkgs.stdenv.mkDerivation {
        name = "scripts";
        phases = [ "installPhase" ];
        installPhase = ''
          mkdir -p $out/scripts
          chmod +x $out/scripts
          cp ${./..}/ops/scripts/relayer.sh $out/scripts/
          cp ${./..}/ops/scripts/relayer-fast.sh $out/scripts/
          substituteInPlace $out/scripts/relayer.sh \
            --replace '/bin/bash' '${pkgs.bash}/bin/bash' \
            --replace 'curl' '${pkgs.curl}/bin/curl' \
            --replace 'sleep' '${pkgs.coreutils}/bin/sleep'
          substituteInPlace $out/scripts/relayer-fast.sh \
            --replace '/bin/bash' '${pkgs.bash}/bin/bash' \
            --replace 'curl' '${pkgs.curl}/bin/curl' \
            --replace 'sleep' '${pkgs.coreutils}/bin/sleep'
        '';
      };
    in pkgs.dockerTools.buildLayeredImage {
      name = "message-relayer";
      tag = tag;
      config = {
        Env = [ "PATH=${relayer}/bin/:${wait-script}/scripts/:${relayer-scripts}/scripts/:${pkgs.yarn}/bin/" ];
        WorkingDir = "${relayer}/lib/node_modules/@eth-optimism/message-relayer/";
        Entrypoint = [
          "${pkgs.nodePackages.npm}/bin/npm"
          "run"
          "start"
        ];
      };
    };

}