Cypress.Commands.add('submitForms', (nome, email, assunto, comentario) => {

    cy.get('#feedback-title').should('contain', 'Feedback')
    cy.get('#name').type(nome)
    cy.get('#email').type(email)
    cy.get('#subject').type(assunto)
    cy.get('#comment').type(comentario)

})