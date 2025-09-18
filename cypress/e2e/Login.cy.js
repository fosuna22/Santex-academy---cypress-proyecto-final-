describe ('Login',() =>{

   
   
   
   
   
     const url = 'https://ticketazo.com.ar/auth/login';

     it('Casos exitosos',() => {
     cy.visit(url)
     cy.get('[data-cy="input-email"]').type('team.tester8@yahoo.com')
     cy.get('[data-cy="input-password"]').type('team8TEST*')
     cy.get('[data-cy="btn-login"]').click()
     cy.url().should('not.eq', url) 
     })
     it('Casos fallidos-Correo invalido',() => {
     cy.visit(url)     
     cy.get('[data-cy="input-email"]').type('team.tester8yahoo.com')  
     cy.get('[data-cy="input-password"]').type('team8TEST*')
     cy.get('.hidden').contains('Introduzca una dirección de correo.')
     cy.get('[data-cy="btn-login"]').click()
     cy.url().should('include', '/auth/login') 
     })
     it('Casos fallidos-Contraseña invalida',() => {
     cy.visit(url)
     cy.get('[data-cy="input-email"]').type('team.tester8@yahoo.com')  
     cy.get('[data-cy="input-password"]').type('teamTEST*')
     cy.get('[data-cy="btn-login"]').click()
     cy.get('.text-red-500').contains('Correo o contraseña incorrectos')
     cy.url().should('include', '/auth/login')
     })

     
})