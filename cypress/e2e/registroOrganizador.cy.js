
describe('Registro de Organizador de Evento de Ticketazo', () => {

  const CUIT_INVALIDO = 'texto'
  const TELEFONO_TEXTO = 'textotexto'
  const TELEFONO_INVALIDO = '341789210'
  const EMAIL_INVALIDO = 'papapjfhfhfhyyeye'
  const CONTRASENIA_CORTA = 'pepito'
  const RAZON = 'La Martina SRL'
  const CUIT = '30637728780'
  const TELEFONO = '4574747646'
  const DIRECCION = 'Lavalle 1200'
  const EMAIL = 'adasds@gmail.com'

  beforeEach(() => {
    cy.visit('https://ticketazo.com.ar/auth/registerClient')
    cy.wait(1000)
  });
  //Prueba intento registro sin completar datos

  it('No debe poder realizar el registro sin completas datos', () => {
    cy.get('[data-cy="btn-registrarse"]').click()
    cy.url().should('include', '/auth/registerClient')
  });

  //Prueba registro con usuario existente y con establecimiento

  it('No debe poder registrar un usuario ya existente', () => {
    cy.fixture('organizadorRegistrado').then((organizador) => {  
      cy.registro(
        organizador.razon,
        organizador.cuit,
        organizador.direccion,
        organizador.telefono,
        organizador.email,
        organizador.password
      )
    })
    cy.get('[data-cy="switch-establecimiento"] > .font-inherit').click()
    cy.get('[data-cy="btn-registrarse"]').click()
    cy.contains('El usuario con este correo electrónico ya existe').should('be.visible')
  });

  //Prueba completando el cuit con strings

  it('No debe permitir ingresar strings en un imput de números por ser CUIT', () => {
    cy.get('[data-cy="input-cuit"]').type(`${CUIT_INVALIDO}`)
    cy.get('[data-cy="switch-establecimiento"] > .font-inherit').click()
    cy.contains('Por favor, ingrese un CUIT').should('be.visible')
  });

  //Prueba completando el número de teléfono con strings

  it('No debe permitir ingresar strings en un imput numérico por ser teléfono', () => {
    cy.get('[data-cy="input-telefono"]').type(`${TELEFONO_TEXTO}`)
    cy.get('[data-cy="switch-establecimiento"] > .font-inherit').click()
    cy.contains('Rellene este campo.').should('be.visible')
  });

  //Prueba completando con número menor a 10 dígitos

  it('No debe permitir ingresar strings en un imput numérico por ser teléfono', () => {
    cy.get('[data-cy="input-telefono"]').type(`${TELEFONO_INVALIDO}`)
    cy.get('[data-cy="switch-establecimiento"] > .font-inherit').click()
    cy.contains('Utiliza un formato que coincida con el solicitado').should('be.visible')
  });

  //Prueba completando sin @ el email

  it('No debe permitir ingresar un email sin @', () => {
    cy.get('[data-cy="input-email"]').type(`${EMAIL_INVALIDO}`)
    cy.get('[data-cy="switch-establecimiento"] > .font-inherit').click()
    cy.contains("Incluye una '@' en la dirección de correo electrónico. La direccion " + EMAIL_INVALIDO + " le falta una '@'").should('be.visible')
  });

  //Prueba completando el formulario con una contraseña menor a 8 caracteres

  it('No debe permitir ingresar una contraseña menor a 8 caracteres alfanuméricos', () => {
    cy.registro(
        RAZON,
        CUIT,
        DIRECCION,
        TELEFONO,
        EMAIL,
        CONTRASENIA_CORTA
      )
    cy.get('[data-cy="switch-establecimiento"] > .font-inherit').click()
    cy.get('[data-cy="btn-registrarse"]').click()
    cy.contains('La contraseña debe tener al menos 8 caracteres, incluyendo mayúsculas, minúsculas, números y símbolos.').should('be.visible')
  })

  //Prueba registro exitoso

  it('Happy Path (Completa el formulario con datos aleatorios)', () => {
    cy.registroNuevo().then((datos) => {
      cy.log(`Se registró con el mail: ${datos.email}`)
    })
    cy.get('[data-cy="switch-establecimiento"] > .font-inherit').click()
    cy.get('[data-cy="btn-registrarse"]').click()
  })
 
});

 //Prueba autorizacion de registro exitosa

describe('Autorización de Registro', () => {
  beforeEach(() => {
    cy.visit('https://ticketazo.com.ar/auth/login')
  });

  it('Autorización de Registro exitosa', () => {
    cy.fixture('adminParaRegistro').then((login) => {
      cy.loginR(login.email, login.password)
      cy.get('[data-cy="btn-login"]').click()
      cy.get('button[aria-label="Toggle menu"]').click()
      cy.get(':nth-child(8) > .pb-4').click()
      cy.wait(1000)

      cy.get('[data-cy="select-estado-1239"]').click({force: true}).click()
      cy.get('[data-cy="option-estado-1239-aprobado"]').click()
      cy.contains('Confirmar cambio de estado').should('be.visible')
      cy.get('[data-cy="btn-confirmar-modal"]').click()
    })
  })
})