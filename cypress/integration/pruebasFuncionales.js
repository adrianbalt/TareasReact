

  describe('Application UI', function() {
    beforeEach(function() {
      cy.visit('/')
    })
  
    it('Cargo la aplicación', function() {
      cy.get('.App h2:first-child').should('contain', 'Lista de Tareas')
    })

    it('Agrega  1 Tarea', function() {
        cy.get('.input-agrega-tarea').type("Nueva Tarea");
        cy.get(".form-agrega-tarea").submit();
        cy.get('div.label-tarea').first().should('contain', 'Nueva Tarea');
      })
    
      it('Completar Tarea', function() {
        cy.get('.input-agrega-tarea').type("Otra Tarea");
        cy.get(".form-agrega-tarea").submit();
        cy.get('.lista-tareas .tarea').first().get('.circulo').click();
        cy.get('.lista-tareas .tarea').first().get('.circulo.fa-check-circle').should('have.length', 1);
      })

      it('Eliminar Tarea', function() {
        cy.get('.input-agrega-tarea').type("Mi Tarea");
        cy.get(".form-agrega-tarea").submit();
        cy.get('.lista-tareas .tarea').first().get('.btn-borra-tarea').click();
        cy.get('.lista-tareas .tarea').should('have.length', 0);
      })

      it('Editar Tarea', function() {
        cy.get('.input-agrega-tarea').type("Tarea Indefinida");
        cy.get(".form-agrega-tarea").submit();
        cy.get('.lista-tareas .tarea').first().get('.label-tarea').dblclick();
        cy.get('.lista-tareas .tarea').first().get('.input-tarea').type("{selectall}").type("{del}").type("Tarea definida");
        cy.get('.lista-tareas .tarea').first().get('.input-tarea').blur();
        cy.get('div.label-tarea').first().should('contain', 'Tarea definida');
      })
  
  })