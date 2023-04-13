import Base from "./base";
import PageHeader from "./page.header";

export default class Page extends Base {
  header: PageHeader;
  constructor() {
    super()
    this.header = new PageHeader()
  }

  visit() {
    cy.visit('/')
  }

  checkMenuListEth() {
    this.header.getMenuList()
      .should('not.be.empty')
      .and(($p) => {
        // should have found 7 elements for Ethereum
        expect($p).to.have.length(7)

        // make sure the first contains some text content
        expect($p.first()).to.contain('Bridge');
        // // use jquery's map to grab all of their classes
        // // jquery's map returns a new jquery object
        const links = $p.map((i, el) => {
          return Cypress.$(el).attr('href')
        })
        // call classes.get() to make this a plain array
        expect(links.get()).to.deep.eq([
          '/bridge',
          '/ecosystem',
          '/wallet',
          '/history',
          '/earn',
          '/stake',
          '/DAO',
        ])

        // get labels and verify
        const labels = $p.map((i, el) => {
          return Cypress.$(el).text()
        })

        expect(labels.get()).to.deep.eq([
          'Bridge',
          'Ecosystem',
          'Wallet',
          'History',
          'Earn',
          'Stake',
          'Dao',
        ])
      })
  }

  checkthemeSwitcher() {

  }
};
