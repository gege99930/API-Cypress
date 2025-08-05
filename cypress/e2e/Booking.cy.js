describe('Teste Booking API', () => {

    it('1- Adquire todos os IDs', () => {
        cy.request({
            method: 'GET',
            url: '/booking',
            headers: { 'Content-Type': 'application/json'}
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.an('array')
            expect(response.body).to.have.lengthOf.at.least(1)
            expect(response.body[0]).to.have.property('bookingid')
        })
    })

    it('2- Adquire todos os IDs', () => {
        cy.request({
            method: 'GET',
            url: '/booking',
            qs: {"firstname": "test"},
            headers: { 'Content-Type': 'application/json'}
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.an('array')
        })
    })
})