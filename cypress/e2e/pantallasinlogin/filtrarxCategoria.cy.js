describe("Filtrar dinámicamente todas las categorías", () => {
  beforeEach(() => {
    cy.visit("https://vps-3696213-x.dattaweb.com/");
  });

  it("Filtra por categoría Recital", () => {
    cy.applyCategory("Recital");
    cy.get('[data-cy="evento-titulo"]').should("exist");
    cy.clearFilters();
  });

  it("Filtra por categoría Teatro", () => {
    cy.applyCategory("Teatro");
    cy.get('[data-cy="evento-titulo"]').should("exist");
    cy.clearFilters();
  });

  it("Filtra por categoría StandUp", () => {
    cy.applyCategory("StandUp");
    cy.get('[data-cy="evento-titulo"]').should("exist");
    cy.clearFilters();
  });

  it("Filtra por categoría Fiesta", () => {
    cy.applyCategory("Fiesta");
    cy.get('[data-cy="evento-titulo"]').should("exist");
    cy.clearFilters();
  });

  it("Filtra por categoría Conferencia", () => {
    cy.applyCategory("Conferencia");
    cy.get('[data-cy="evento-titulo"]').should("exist");
    cy.clearFilters();
  });

  it("Filtra por categoría Deportes", () => {
    cy.applyCategory("Deportes");
    cy.get('[data-cy="evento-titulo"]').should("exist");
    cy.clearFilters();
  });

  it("Filtra por categoría Feria", () => {
    cy.applyCategory("Feria");
    cy.get('[data-cy="evento-titulo"]').should("exist");
    cy.clearFilters();
  });

  it("Filtra por categoría Festival", () => {
    cy.applyCategory("Festival");
    cy.get('[data-cy="evento-titulo"]').should("exist");
    cy.clearFilters();
  });

  it("Filtra por categoría Exposición", () => {
    cy.applyCategory("Exposición");
    cy.get('[data-cy="evento-titulo"]').should("exist");
    cy.clearFilters();
  });

  it("Filtra por categoría Otro", () => {
    cy.applyCategory("Otro");
    cy.get('[data-cy="evento-titulo"]').should("exist");
    cy.clearFilters();
  });
});
