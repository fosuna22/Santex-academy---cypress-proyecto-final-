Cypress.Commands.add('clearFilters', () => {
  cy.contains('button', 'Limpiar filtros').click();
});
