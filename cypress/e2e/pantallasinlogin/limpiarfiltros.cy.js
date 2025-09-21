describe("Limpiar filtros", () => {
  beforeEach(() => {
    cy.visit("https://vps-3696213-x.dattaweb.com/");
  });

  afterEach(() => {
    cy.get('button[type="button"]')
      .contains(/limpiar filtros/i)
      .click();
  });

  it("Filtra eventos al escribir un nombre en el campo de búsqueda", () => {
    cy.get('input[aria-label="Search"]').type("test{enter}").wait(4000);
  });

  it("Filtra eventos por Provincia", () => {
    cy.contains('[data-slot="mainWrapper"]', "Provincia").click().wait(3000);
    cy.get('[data-slot="listbox"]').contains("Córdoba").click().wait(3000);
    cy.get('[data-cy="evento-titulo"]').should("exist");
  });

  it.skip("Filtra eventos por Categoria", () => {
    cy.contains('[data-slot="innerWrapper"]', "Categoría").click().wait(3000);
    cy.get('[data-slot="listbox"]').contains("StandUp").click().wait(3000);
  });
});