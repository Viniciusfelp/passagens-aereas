Funcionalidade: compra de passagem

Scenario: compra de passagem, pagamento com sucesso
Given Estou logado com “cpf” “001.002.003-10” e “senha” “123456”
And A “origem” está preenchida com “REC”, “destino” com “GRU”, “ida” com “21/02/2022” e volta com “23/02/2022” e “assento” “E35”
And Estou na página de “pagamento”
And Os “dados de pagamento” estão preenchidos como “número do cartão” com “1111 2222 3333 4444”, “validade” com “06/2027”, “titular” com “JOAO PEDRO SILVA”, “cpf do titular” com “001.002.003-10” e “cvv” com “123”
When Eu seleciono a opção de “confirmar compra”
Then eu posso ver uma mensagem de confirmação da compra da passagem
And Eu estou na página de “próximos voos”
And Eu posso ver o voo recém comprado com código “VOO2245” na lista de “próximos voos”

Scenario: compra de passagem, sem sucesso
Given Estou logado com “cpf” “001.002.003-10” e “senha” “123456”
And A “origem” está preenchida com “REC”, “destino” com “GRU”, “ida” com “21/02/2022” e volta com “23/02/2022” e “assento” “E35”
And Estou na página de “pagamento”
And Os “dados de pagamento” estão preenchidos como “número do cartão” com “1111 2222 3333 4444”, “validade” com “06/2027”, “titular” com “JOAO PEDRO SILVA” e “cpf do titular” com “001.002.003-10”
When Eu seleciono a opção de “confirmar compra”
Then Eu posso ver uma mensagem de erro afirmando que há “campos obrigatórios” em branco
And Eu continuo na página de “pagamento”
And Eu posso ver que o campo de “cvv” continua em branco


Scenario: voos não disponíveis
Given Estou na página de seleção de “origem” e “destino” e “ida” e “volta”
And Eu preencho a “origem” com “REC”, “destino” com “GRU”, “ida” com “21/02/2022”, volta com “23/02/2022”
When Eu seleciono a opção de “buscar voos”
Then Eu sou redirecionado para a página de “voos”
And Eu posso ver uma mensagem dizendo que não há voos disponíveis para as datas e locais escolhidos
And Eu sou redirecionado para a página de seleção de “origem” e “destino” “ida” e “volta”

Scenario: tempo esgotado para compra de passagem
Given Estou logado com “cpf” “001.002.003-10” e “senha” “123456”
And Os dados de “origem” e “destino” e “ida” e “volta” estão preenchidos
And Eu seleciono o “assento” “E35”
And O tempo de espera de reserva da passagem está esgotado
When Eu seleciono a opção de prosseguir com a compra
Then eu posso ver uma mensagem de aviso sobre o assento já ter sido escolhido por outro cliente
And Eu continuo na página de seleção de assento
And Eu posso ver o assento “E35” está marcado como indisponível

Scenario: escolha do voo
Given Estou na página de seleção de “origem” e “destino” e “ida” e “volta”
And Eu preencho a “origem” com “REC”, “destino” com “GRU”, “ida” com “25/04/2022”, volta com “03/05/2022”
When Eu seleciono a opção de “buscar voos”
Then Eu sou redirecionado para a página de “voos”

Scenario: adição de bagagem
Given Estou na página de “adição de bagagem”
And Eu tenho a opção “bagagem de 23 kg” adicionada ao meu “carrinho”
When Eu seleciono a opção de “salvar” as escolhas
Then Eu posso ver uma mensagem de sucesso
And Eu vejo a “bagagem de 23 kg” adicionadas às minhas “informações de voo”
