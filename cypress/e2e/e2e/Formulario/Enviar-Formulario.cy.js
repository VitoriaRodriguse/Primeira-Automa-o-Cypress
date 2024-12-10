/// <reference types="cypress" />
import { faker } from '@faker-js/faker';

describe('Formulario Feedback', () => {

    let nome, email, assunto, comentario

    beforeEach(() => {
        cy.visit('/feedback.html')
        nome = faker.person.fullName()
        email = faker.internet.email()
        assunto = faker.lorem.words(4)
        comentario = faker.lorem.sentences(7)
    })


    it('Submeter Formulário', () => {

        cy.submitForms(nome, email, assunto, comentario)
        cy.get('.btn-signin').click()
        cy.get('#feedback-title').should('contain', 'Feedback')
        cy.contains(`Thank you for your comments, ${nome}. They will be reviewed by our Customer Service staff and given the full attention that they deserve.`)
    })


     it('Limpar Formulário', () => {

        cy.submitForms(nome, email, assunto, comentario)
        cy.get('[type="reset"]').click()
     })

})