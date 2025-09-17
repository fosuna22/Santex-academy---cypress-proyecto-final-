describe ('Login',() =>{

     const url = 'https://ticketazo.com.ar/auth/login';


     //it('Casos exitosos',() => {
     //cy.visit(url)
     //cy.get('[data-cy="input-email"]').type('team.tester8@yahoo.com')
     //cy.get('[data-cy="input-password"]').type('team8TEST*')
     //cy.get('[data-cy="btn-login"]').click()
     //cy.url().should('not.eq', url) 
        //})

     it.only("prueba para vani", () => {
     cy.visit("https://ticketazo.com.ar/auth/login");
     cy.get('[data-cy="input-email"]').type("testtestcom");
     cy.get('[data-cy="btn-login"]').click()
     cy.wait(4000);
     cy.get('.text-danger').should('contain', 'Incluye un signo "@" en la dirección de correo electrónico');
  });
     
     }    )
     
       
    
    
   
  