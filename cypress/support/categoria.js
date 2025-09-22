Cypress.Commands.add("applyCategory", (categoria) => {
  cy.get('button[aria-label="Categoría"]').should("be.visible").click();
  cy.get('[data-slot="listbox"]').should("be.visible");
  cy.get('[data-slot="listbox"]')
    .contains('span[data-label="true"]', categoria, { timeout: 10000 })
    .scrollIntoView()
    .click({ force: true });
});

Cypress.Commands.add("clearFilters", () => {
  cy.contains("button", "Limpiar filtros").should("be.visible").click();
  cy.get('[data-slot="listbox"]').should("not.exist");
});
