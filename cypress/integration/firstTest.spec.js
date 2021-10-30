/// <reference types="Cypress" />

const { get } = require("core-js/core/dict")

describe('Our first suite',() => {

    it('selectors', () =>{
        
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //by TAG name
        cy.get('input')

        //by ID
        cy.get('#inputEmail1')

        //by Class name
        cy.get('.input-full-width')

        //by Attribute name
        cy.get('[placeholder]')

        //by attribute name and value
        cy.get('[placeholder="Email"]')

        //by class value - need full value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        //by tag name and attribute value
        cy.get('input[placeholder="Email"]')

        // by two different attribute values
        cy.get('input[placeholder="Email"][type="email"]')

        //by tag name attribute by value id and class name
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        //the most recommended way by cypress
        cy.get('[data-cy="imputEmail1"]')
    })

    it('finding elements on a page',()=>{
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        //cliking on the menu button on the right top corner
        cy.get('[data-cy="iconMenu2"]').click()

        //adding data cy
        cy.get('[data-cy="SignInButton"]')

        //SIGN IN from horizontal form
        cy.contains('[status="warning"]', 'Sign in')

        //using parents to find Sign in button and check box
        cy.get('#inputEmail3')
        .parents('form')
        .find('button').should('contain','Sign in')
        .parents('form')
        .find('nb-checkbox').scrollIntoView().click()

        //find Sign in button on horizontal form using the contains
        cy.contains('nb-card','Horizontal form')
        .find('[type="email"]')
    })

    it.only('when', ()=>{

    })
})