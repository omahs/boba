export default class Base {
  acceptMetamaskAccessRequest() {
    cy.acceptMetamaskAccess()
  }

  readLocalStorage() {
    return cy.getAllLocalStorage()
  }

  getBody() {
    return cy.get('body');
  }
}
