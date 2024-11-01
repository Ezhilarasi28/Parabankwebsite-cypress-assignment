describe('Verifying Login', () => {
    it('Valid Login - should log in with correct credentials', () => {
      // Visit the login page
      cy.visit("https://parabank.parasoft.com/parabank/lookup.htm");
  
      // Enter valid username and password
      cy.get('[name="username"]').type('firstname');
      cy.get('[name="password"]').type('lastname@19');
      cy.get('div:nth-child(5) >.button').click();
      cy.contains('.smallText').should('be.visible');
      
    });
  });
  