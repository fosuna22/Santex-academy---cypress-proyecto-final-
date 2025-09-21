describe("Probando pagina sin logueo en modo claro", () => {
  beforeEach(() => {
    cy.visit("https://vps-3696213-x.dattaweb.com/");
  });

  it("Cambia modo oscuro/claro y hace clic en un evento aleatorio", () => {
    cy.get('[aria-label="Switch to light mode"]').first().click();
    cy.clickEventoAleatorio();
  });
});




