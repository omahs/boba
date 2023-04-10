describe('Test user connect flow!', () => {
  it('Should show the connect button if not logedIn', () => {
    cy.visit('/')
    cy.findByRole('button', { name: /connect/i }).should('be.visible')
  })
})
