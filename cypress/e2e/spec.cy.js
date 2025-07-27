describe('Testes no Site Automation Exercise', () => {
  beforeEach(() => {
    cy.visit("/")
  })

  it("Test Case 9 - Search Product", () => {
    //Faz a busca por algum item do site e valida a visibilidade do item
    cy.get('.shop-menu > .nav')
    .contains('Products')
    .should('have.attr', 'href', '/products')//valida se o botao leva mesmo a pagina de produtos
    .click()//Acessa a pagina de produtos

    cy.get('#search_product').type('Winter Top')//Escreve o item a ser buscado
    cy.get('#submit_search').click()//Faz a busca

    cy.get('.features_items').should('contain', 'Winter Top')
  })
})