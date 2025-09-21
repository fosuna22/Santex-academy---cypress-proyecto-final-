describe('Filtrar por provincia y localidad', () => {
  
  beforeEach(() => {
    cy.visit('https://vps-3696213-x.dattaweb.com/');

  });
  
  it('Filtra eventos por Córdoba y luego una localidad', () => {
    // Seleccionar provincia
    cy.contains('[data-slot="mainWrapper"]', 'Provincia').click();
    cy.get('[data-slot="listbox"]').contains('Córdoba').click()
    .wait(3000);
    // Seleccionar localidad
    cy.contains('[data-slot="mainWrapper"]', 'Localidad').click()
    .wait(3000);
    cy.get('[data-slot="listbox"]').contains('Córdoba').click()
    .wait(3000);


    cy.get('[data-cy="evento-titulo"]').should('exist');
  });
});



