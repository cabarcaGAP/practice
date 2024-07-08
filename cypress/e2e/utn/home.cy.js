describe('Admision', () => {

    it('Contenido Principal', () => {
        cy.visit('https://utn.ac.cr/admision')
        cy.contains("Proceso de Admisión")
        cy.wait(5000)
    })
});