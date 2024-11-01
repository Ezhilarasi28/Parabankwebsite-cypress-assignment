describe('Verifying Login', () => {
  it('InValid Login - Without Input for Username and Password', () => {
    
    cy.visit("https://parabank.parasoft.com/parabank/lookup.htm");
    cy.get('[name="username"]').type(' ');
    cy.get('[name="password"]').type(' ');
    cy.get('div:nth-child(5) >.button').click();
    
    cy.get('.error').should("be.visible");
    
  });
});