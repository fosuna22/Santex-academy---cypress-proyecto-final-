describe ('Login',() =>{

     const url = 'https://ticketazo.com.ar/auth/login';


     //it('Casos exitosos',() => {
     //cy.visit(url)
     //cy.get('[data-cy="input-email"]').type('team.tester8@yahoo.com')
     //cy.get('[data-cy="input-password"]').type('team8TEST*')
     //cy.get('[data-cy="btn-login"]').click()
     //cy.url().should('not.eq', url) 
        //})
           
       it('casos exitoso-recuperar contraseña',() => {
       cy.visit(url)
       cy.get('[data-cy="btn-forgot-password"]').click()
       cy.url().should('include', '/auth/forgot-password')
       cy.get('[data-cy="input-email"]').type('vaninap79@gmail.com')
       cy.get('[data-cy="btn-enviar-email"]').click()
   
   
        //cy.get('.text-danger').should('have.class', 'text-danger');


   });
     
     }    )
     
       
    
    
   
  