
Cypress.Commands.add('registro', (razon,cuit,direccion,telefono,email, password) => {
cy.get('[data-cy="input-razon-social"]').type(razon)
cy.get('[data-cy="input-cuit"]').type(cuit)
cy.get('[data-cy="select-provincia"]').click().type('Cordoba')
cy.contains('Córdoba').click()
cy.get('[data-cy="select-localidad"]').type('Achiras')
cy.contains('Achiras').click()
cy.get('[data-cy="input-direccion"]').type(direccion)
cy.get('[data-cy="input-telefono"]').type(telefono)
cy.get('[data-cy="input-email"]').type(email)
cy.get('[data-cy="input-confirmar-email"]').type(email)
cy.get('[data-cy="input-password"]').type(password)
cy.get('[data-cy="input-repetir-password"]').type(password)
})

Cypress.Commands.add('loginR', (email, password) => {
cy.get('[data-cy="input-email"]').type(email)
cy.get('[data-cy="input-password"]').type(password)
})

Cypress.Commands.add('registroNuevo', (overrides = {}) => {
  const data = {
    razon: `La Empresa Random ${Date.now()}`,
    cuit: `${Cypress._.random(20000000000, 20999999999)}`,
    direccion: `Calle Siempre Viva ${Cypress._.random(1, 9999)}`,
    telefono: `11${Cypress._.random(10000000, 99999999)}`,
    email: `user${Date.now()}@mail.com`,
    password: `Pass${Cypress._.random(1000, 9999)}@`
  }

  // El email y la contraseña se confirman automáticamente
  Object.assign(data, overrides)
  if (!data.confirmarEmail) data.confirmarEmail = data.email
  if (!data.repetirPassword) data.repetirPassword = data.password

  cy.get('[data-cy="input-razon-social"]').type(data.razon)
  cy.get('[data-cy="input-cuit"]').type(data.cuit)
  cy.get('[data-cy="select-provincia"]').click().type('Cordoba')
  cy.contains('Córdoba').click()
  cy.get('[data-cy="select-localidad"]').type('Achiras')
  cy.contains('Achiras').click()
  cy.get('[data-cy="input-direccion"]').type(data.direccion)
  cy.get('[data-cy="input-telefono"]').type(data.telefono)
  cy.get('[data-cy="input-email"]').type(data.email)
  cy.get('[data-cy="input-confirmar-email"]').type(data.confirmarEmail)
  cy.get('[data-cy="input-password"]').type(data.password)
  cy.get('[data-cy="input-repetir-password"]').type(data.repetirPassword)

  return cy.wrap(data)  // Permite usar .then(datos => ...)
})
