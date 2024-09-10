

describe('Formulário de Cadastro', () => {
  beforeEach(() => {
      cy.visit('http://localhost:3000'); 
  });

  it('Deve exibir mensagem de erro ao deixar campos obrigatórios vazios', () => {
      cy.get('button[type="submit"]').click();
      cy.get('.message.error').should('contain.text', 'Por favor, preencha todos os campos.');
  });

  it('Deve exibir mensagem de erro se as senhas não coincidirem', () => {
      cy.get('#name').type('João Silva');
      cy.get('#email').type('joao.silva@example.com');
      cy.get('#password').type('senha123');
      cy.get('#confirm-password').type('senha124');
      cy.get('button[type="submit"]').click();
      cy.get('.message.error').should('contain.text', 'As senhas não coincidem.');
  });

  it('Deve exibir mensagem de sucesso e limpar o formulário ao cadastrar com sucesso', () => {
      cy.get('#name').type('Maria Oliveira');
      cy.get('#email').type('maria.oliveira@example.com');
      cy.get('#password').type('senha1234');
      cy.get('#confirm-password').type('senha1234');
      cy.get('button[type="submit"]').click();
      cy.get('.message.success').should('contain.text', 'Cadastro realizado com sucesso!');

     
      cy.get('#name').should('have.value', '');
      cy.get('#email').should('have.value', '');
      cy.get('#password').should('have.value', '');
      cy.get('#confirm-password').should('have.value', '');
  });
});
