describe('Home', () => {

    it('Contenido Principal', () => {
        cy.visit('https://www.utn.ac.cr/admision')
        cy.contains("Proceso de Admisión")
    })
});