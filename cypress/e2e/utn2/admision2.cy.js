describe('Admision', () => {

    it('Contenido Principal', () => {
        cy.visit('/admision')
        cy.get("a[title='Expand menu Acerca de la UTN']").click()
        cy.wait(5000)
        cy.get("a[href*='marco-estrat']").first().click()
        cy.contains("Contribuir a la equidad de oportunidades")
    })
});
