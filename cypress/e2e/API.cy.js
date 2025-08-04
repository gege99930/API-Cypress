describe('Testes no Site Automation Exercise', () => {

  it("POST autenticacao de credenciais com sucesso", () => {
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
})