---
description: A collection of links and addresses to get started on Boba-Avalanche
---

- [Boba Avalanche Testnet L2 (4328) for the Avalanche Testnet (43113)](#boba-avalanche-testnet-l2--4328--for-the-avalanche-testnet--43113-)
  * [Testnet Fountain for Developers on Boba Avalanche Testnet L2](#testnet-fountain-for-developers-on-boba-avalanche-testnet-l2)
  * [Bridging](#bridging)
  * [Analytics and eth_getLogs](#Analytics-and-eth-getlogs)
  * [Boba Avalanche Testnet L2 Addresses](#boba-avalanche-testnet-l2-addresses)
  * [Boba Avalanche Testnet L2 Links and Endpoints](#boba-avalanche-testnet-l2-links-and-endpoints)
- [Boba Avalanche L2 (43288) for the Avalanche L1 (43114)](#boba-avalanche-l2--43288--for-the-avalanche-l1--43114-)
  * [Boba Avalanche L2 Addresses (tbd)](#boba-avalanche-l2-addresses--tbd-)
  * [Boba Avalanche L2 Links and Endpoints (tbd)](#boba-avalanche-l2-links-and-endpoints--tbd-)

# Boba Avalanche Testnet L2 (4328) for the Avalanche Testnet (43113)

## Testnet Fountain for Developers on Boba Avalanche Testnet L2

There is a Boba Avalanche testnet [fountain](https://gateway.testnet.avax.boba.network) for `BOBA`. Authentication is via Twitter - please go to the gateway and connect your MetaMask wallet to the Boba Avalanche Testnet L2. In **gateway > wallet**, you will see the `Developer Twitter/Turing test token fountain`. This system uses Turing hybrid compute to interact with Twitter.

## Bridging

The standard bridges for `AVAX` and `BOBA` are active, so you can can both bridge and exit `AVAX` and `BOBA` from Avalanche Testnet to Boba Avalanche Testnet and back.

## Analytics and eth_getLogs

If you have unusual `getLogs` needs, especially calls from `0 to latest`, the main RPC will block you, since this is how most DoS attacks work. In those cases, we encourage you to run your own RPC endpoint on your own replica of Bobaopera. We have prepared Docker images for you, so this should only take a few minutes. To access these images:

* clone the `boba` repo

* switch to `alt-l1` branch.

* Add `.env` in [boba-node](https://github.com/bobanetwork/boba/tree/alt-l1/boba_community/boba-node) folder

  ```
  RELEASE_VERSION=v0.X.X
  ```

The docker-compose file is in [`boba-community/boba-node/docker-compose-bobafuji.yml`](https://github.com/bobanetwork/boba/tree/alt-l1/boba_community/boba-node).

```bash
$ docker compose -f docker-compose-bobafuji.yml pull
$ docker compose -f docker-compose-bobafuji.yml up
```

The DTL will first sync with the chain. During the sync, you will see the DTL and Replica gradually catch up with the Boba L2. This can take several minutes to several hours, depending on which chain you are replicating.

## Boba Avalanche Testnet Addresses

For **primary contracts and addresses** see [packages/contracts/deployments/bobafuji/README.md](../../packages/contracts/deployments/bobafuji/README.md)

For **secondary addresses**, such as L2 Tokens and Messengers, please see the [Boba Avalanche Testnet address registration dump](../../packages/boba/register/addresses/addressesBobaOperaTestnet_0x12ad9f501149D3FDd703cC10c567F416B7F0af8b.json).

## Boba Avalanche Testnet Links and Endpoints

|               |                                                              |
| ------------- | ------------------------------------------------------------ |
| ChainID       | 43288                                                        |
| RPC           | [https://testnet.avax.boba.network](https://testnet.avax.boba.network) |
| Replica RPC   | [https://testnet.avax.boba.network](https://testnet.avax.boba.network) |
| Gateway       | [https://gateway.testnet.avax.boba.network](https://gateway.testnet.avax.boba.network) |
| Blockexplorer | [https://blockexplorer.testnet.avax.boba.network](https://blockexplorer.testnet.avax.boba.network) |
| Websocket     | [wss://wss.testnet.avax.boba.network](wss://wss.testnet.avax.boba.network) |

# Boba Avalanche L2 (43288) for the Avalanche L1 (43114)

## Boba Avalanche Addresses (tbd)

For **primary contracts and addresses** see [packages/contracts/deployments/bobaavalanche/README.md](../../packages/contracts/deployments/bobaavalanche/README.md)

For **secondary addresses**, such as L2 Tokens and Messengers, please see the [Boba Avalanche address registration dump](../../packages/boba/register/addresses/addressesBobaOpera_0xTBATBATBATBA.json).

## Boba Avalanche Links and Endpoints (tbd)

|               |                            |
| ------------- | -------------------------- |
| ChainID       | 43288                      |
| RPC Read      | [https://tbd](https://tbd) |
| Write RPC     | [https://tbd](https://tbd) |
| Gateway       | [https://tbd](https://tbd) |
| Blockexplorer | [https://tbd](https://tbd) |
| Websocket     | [wss://tbd](wss://tbd)     |