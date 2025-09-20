describe('Limpiar Filtros',() =>{
      beforeEach(()=>{
        cy.visit('https://ticketazo.com.ar');
        cy.reload();
    })
   it('Limpiar Filtro Categoria',()=>{
         cy.get('.p-2').click()    
         cy.get('button[aria-label="Categoría"]:visible').click()
         cy.contains('span', 'Recital', { timeout: 10000 }).should('be.visible').click({ force: true })
         cy.get('.mx-auto > .flex-wrap > :nth-child(5) > .z-0').click()//Click Limpiar filtro
         cy.get('button[aria-label="Categoría"]').should('contain.text', 'Categoria')  
        }   
  )   

   it('Limpiar Filtro Provincia',()=>{       
         cy.get('.p-2').click() 
         cy.get('button[aria-label="Provincia"]:visible').click()
         cy.contains('span', 'Corrientes', { timeout: 10000 }).should('be.visible').click({ force: true })
         cy.get('.mx-auto > .flex-wrap > :nth-child(6) > .z-0').click()
         cy.get('button[aria-label="Provincia"]').should('contain.text', 'Provincia') 
    }      
  )   
  it('Limpiar Filtro fecha',()=>{       
        cy.get('.p-2').click() 
        cy.get('div[aria-label="día, Fecha de inicio, "]').filter(':visible').click().type('19')
        cy.get('div[aria-label="mes, Fecha de inicio, "]').filter(':visible').click().type('10')
        cy.get('div[aria-label="año, Fecha de inicio, "]').filter(':visible').click().type('2025')
        cy.get('div[aria-label="día, Fecha final, "]').filter(':visible').click().type('25')
        cy.get('div[aria-label="día, Fecha final, "]').filter(':visible').click().type('11')
        cy.get('div[aria-label="día, Fecha final, "]').filter(':visible').click().type('2025')
        cy.get('.mx-auto > .flex-wrap > :nth-child(5) > .z-0').click()
        cy.get('div[aria-label="día, Fecha de inicio, "]').filter(':visible').should('have.text', 'dd')
        cy.get('div[aria-label="mes, Fecha de inicio, "]').filter(':visible').should('have.text', 'mm')
        cy.get('div[aria-label="año, Fecha de inicio, "]').filter(':visible').should('have.text', 'aaaa')
        cy.get('div[aria-label="día, Fecha final, "]').filter(':visible').should('have.text', 'dd')
        cy.get('div[aria-label="mes, Fecha final, "]').filter(':visible').should('have.text', 'mm')
        cy.get('div[aria-label="año, Fecha final, "]').filter(':visible').should('have.text', 'aaaa')
    }      
  )   
  it('Limpiar Filtro fecha sin completar',()=>{       
        cy.get('.p-2').click() 
        cy.get('div[aria-label="día, Fecha de inicio, "]').filter(':visible').click().type('19')
        cy.get('.mx-auto > .flex-wrap > :nth-child(5) > .z-0').click()
        cy.get('div[aria-label="día, Fecha de inicio, "]').filter(':visible').should('have.text', 'dd')
        
    }      
  )   
   it('Limpiar filtro Buscar funcion',()=>{       
        cy.get('.p-2').click() 
        cy.get('input[aria-label="Search"]').type('Eternatua')
        cy.get('.mx-auto > .flex-wrap > :nth-child(5) > .z-0').click()
        cy.get('input[aria-label="Search"]').should('have.text', '')
    }      
  )   
}

)