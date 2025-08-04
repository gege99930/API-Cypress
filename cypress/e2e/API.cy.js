describe('Testes no Site Automation Exercise', () => {

  it("1 - POST autenticacao de credenciais com sucesso", () => {
    //Faz a busca por algum item do site e valida a visibilidade do item
    cy.request({
      method: 'POST',
      url: '/auth',
      body:{
        "username": "admin",
        "password": "password123"
      },
      headers:{'Content-Type': 'application/json'},
      failOnStatusCode: false
    }).then((response) => {
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('token').and.to.be.a('string')
      expect(response.body).not.to.be.empty;
    });
  })

  it("2- POST Autenticacao - Custom Commands", () => {

    let body = {
        "username": "admin",
        "password": "password123"
      }

    cy.postRequest(Cypress.env('auth_url'), {"Content-type": "application/json"}, body)
    .then((response) => {
      debugger
      expect(response.status).to.eq(200);
      expect(response.body).to.have.property('token').and.to.be.a('string')
      expect(response.body).not.to.be.empty;
    })
  })
})