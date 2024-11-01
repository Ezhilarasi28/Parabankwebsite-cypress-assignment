describe('Verifying Login', () => {
  it('InValid Login - should log in with incorrect credentials', () => {
    // Visit the login page
    cy.visit("https://parabank.parasoft.com/parabank/lookup.htm");

    cy.get('[name="username"]').type('firstname');
    cy.get('[name="password"]').type('try@19');
    cy.get('div:nth-child(5) >.button').click();
    cy.contains('The username and password could not be verified').should('be.visible');
    
  });
});