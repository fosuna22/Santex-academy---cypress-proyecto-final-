Cypress.Commands.add('clickEventoAleatorio', () => {
  Cypress._.times(3, () => {
    cy.get('button[type="button"]:contains("evento")').then($eventos => {
      const randomIndex = Math.floor(Math.random() * $eventos.length);
      cy.wrap($eventos[randomIndex]).click();
      cy.get('[role="dialog"]', { timeout: 8000 } ).should('be.visible');
      cy.wait(3000);
      cy.get('body').click(10, 10);
    });
  });
});