describe ('Login',() =>{
     it('Casos exitosos',() => {
        
    cy.visit('https://ticketazo.com.ar')
    cy.get('[data-cy="btn-iniciar-sesion"]').click()
    
    cy.get('[data-cy="input-email"]').type('vaninap79@gmail.com')
    cy.get('[data-cy="input-password"]').type('Abcd1234/')
    cy.get('[data-cy="btn-login"]').click()

   
   
   
    
   
     
   
   // cy.get('[data-cy="input-email"]').type('Algo@gmail.com')
   // cy.get('[data-cy="input-password"]').type('1234Abcd/')
   // cy.get('[data-cy="btn-login"]').click()




    //cy.contains('dd').type('05')
     //cy.contains('mm').type('08')
     //cy.contains('aaaa').type('1990')
     //cy.get('[data-cy="input-email"]').type ('algo@gm.com')
     //cy.get('[data-cy="input-confirmar-email"]').type('algo@gm.com')
     //cy.get('[data-cy="input-password"]').type('1234Abcd/')
     //cy.get('[data-cy="input-repetir-password"]').type('1234Abcd/')
     //cy.get('[data-cy="btn-registrarse"]').click()
       

    })
})

    
       
     




