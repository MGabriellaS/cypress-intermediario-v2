describe('Logout', () => {
    beforeEach(() => {
      cy.login()
      cy.visit('/')
    })
  
    it.only('Verify that is possible logout sucessfull', () => {
      cy.logout()
  
      cy.url().should('be.equal', `${Cypress.config('baseUrl')}/users/sign_in`)
    })
    
  })