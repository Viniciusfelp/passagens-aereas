Scenario: Login com sucesso
Given Estou na página “login”
And Existe um usuário com login “001.002.003-10” no sistema
When Preencho o campo de usuário com “001.002.003-10”
And Preencho o campo de senha com “senha”
And Submeto esse formulário
Then sou logado no sistema com a conta cujo nome de usuário é “001.002.003-10”
And Sou redirecionado para a página inicial do sistema
