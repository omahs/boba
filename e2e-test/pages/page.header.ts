import Base from "./base";

export default class PageHeader extends Base {

  constructor() {
    super();
  }

  getBobaLogo() {

  }

  getMenuList() {
    return cy.get('nav a');
  }

  getThemeSwitcher() {
    return cy.get('.themeSwitcher');
  }

  getL1ConnectorBtn() {

  }

  getL2ConnectBtn() {

  }

  getChainSwitcher() {

  }

  getConnectNetworkName() {

  }

  getWalletAddress() {

  }

  getCopyAddressBtn() {

  }

  getLogOutBtn() {

  }

  getFeeSwitcher() {

  }

  getFeeSwitcherLabel() {

  }

}
