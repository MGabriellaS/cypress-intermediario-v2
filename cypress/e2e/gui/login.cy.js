describe('login', () => {
 
  beforeEach(() => {
      cy.visit('/users/sign_in')
  })

  it('Verify that is possible login successfully',() => {
    cy.login()

    cy.get('.qa-user-avatar').should('be.visible')
  })
  
  it('', () => {
      
  });
})