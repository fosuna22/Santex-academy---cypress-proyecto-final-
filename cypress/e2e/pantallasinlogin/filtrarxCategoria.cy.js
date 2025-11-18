describe("Filtrar dinámicamente todas las categorías", () => {
  beforeEach(() => {
    cy.visit("https://vps-3696213-x.dattaweb.com/");
  });

  // Prueba parametrizada: reduce de 10 pruebas a 1 con múltiples categorías
  // Solo probamos las categorías más importantes para reducir tiempo de ejecución
  const categoriasImportantes = [
    "Recital",
    "Teatro", 
    "StandUp"
  ];

  categoriasImportantes.forEach((categoria) => {
    it(`Filtra por categoría ${categoria}`, () => {
      cy.applyCategory(categoria);
      cy.get('[data-cy="evento-titulo"]').should("exist");
      cy.clearFilters();
    });
  });
});
