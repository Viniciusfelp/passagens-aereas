Scenario: Login com sucesso
Given Estou na página “login”
And Existe um usuário com login “001.002.003-10” no sistema
And a senha do usuário é "senha"
When Preencho o campo de usuário com “001.002.003-10”
And Preencho o campo de senha com “senha”
And Submeto esse formulário
Then sou logado no sistema com a conta cujo nome de usuário é “001.002.003-10”
And Sou redirecionado para a página inicial do sistema

Scenario: Login mal sucedido, senha incorreta
Given Estou na página “login”
And Existe um usuário  com login “001.002.003-10” no sistema
And A senha desse usuário é “senha”
When Preencho o campo de usuário com “001.002.003-10”
And Preencho o campo de senha com “1234”
And Submeto esse formulário
Then Uma mensagem de login mal sucedido é mostrada
And Permanence na mesma página
And Os campos “usuário” e “senha” são limpos
And É possível realizar a submissão de um novo formulário de login

Scenario: Acesso direto a uma página sem usuário autenticado
Given: Que não estou autenticado no sistema
When Tento fazer um acesso direto a página “Meus vôos” por um link
Then Sou redirecionado para a página “login”

Scenario:Recuperação de senha
Given Que estou na página “Recuperação de senha”
And Existe um usuário com login “001.002.003-10” no sistema
When preencho o campo de usuário “001.002.003-10”
And Submeto para a recuperação de senha
Then É enviado um email com instruções de recuperação de senha para o email do usuário
And Sou redirecionado para a página “login”
And É possível realizar a submissão de um novo formulário de login

Scenario: Login mal sucedido, CPF inválido
Given Estou na página “login”
And o CPF "000.000.000-00" é um CPF inválido pois não atende as regras de validação de CPF
When Preencho o campo de usuário com “000.000.000-00”
And Preencho o campo de senha com "senha"
And Submeto esse formulário 
Then Uma mensagem de CPF inválido é mostrada
And Permanence na mesma página

Scenario: Logout
Given Estou logado na aplicação
And Estou na "página inicial"
When Clico em "sair"
And Confirmo que desejo sair
Then É feito o logout do usuário
And A página é redirecionada para a página "login" 
