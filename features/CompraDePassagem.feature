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