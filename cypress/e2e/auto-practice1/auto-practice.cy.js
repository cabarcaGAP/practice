/// <reference types="cypress" />

// Welcome to Cypress!
//
// This spec file contains a variety of sample tests
// for a todo list app that are designed to demonstrate
// the power of writing tests in Cypress.
//
// To learn more about how Cypress works and
// what makes it such an awesome testing tool,
// please read our getting started guide:
// https://on.cypress.io/introduction-to-cypress

describe('Student login', () => {
    beforeEach(() => {
        cy.visit('https://practicetestautomation.com/practice-test-login/')
    })

    it('can login with Secret Password - COPYTEST!', () => {
        cy.get('#username').type('student')
        cy.get('#password').type(`${Cypress.env('PASS_ONE')}`)
        cy.get('#submit').click()
        cy.contains('Logged In Successfully')
    })
})
