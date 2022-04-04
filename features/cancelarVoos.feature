Cenário: usuário cancelando “2” vôos que foram comprados em sua conta
Given: usuário logado com login “agênciaturismoAB” e senha “12345”
And: na página de “cancelar vôos”
And: o vôo de “código” “153421” anteriormente comprado e agora disponível 
And: o vôo de “código” “153422” anteriormente comprado e agora disponível
And: o vôo de “código” “153423” anteriormente comprado e agora disponível
When: seleciono o vôo de “código” “153421”
And: seleciono o vôo de “código” “153422”
And: seleciono para “cancelar”
Then: continuo na página de “cancelar vôos”
And: aparece na tela uma mensagem pedindo para digitar a senha e confirmar 
When: digito a senha “12345”
And: seleciono para prosseguir
Then: continuo na página de “cancelar vôos”
And: o único vôo disponível é o de código “153423"






Cenário: usuário começa o cancelamento de um vôo mas aborta a operação antes do fim
Given: usuário logado com login “agênciaturismoAB” e senha “12345”
And: na página de “cancelar vôos”
And: o vôo de “código” “153421” anteriormente comprado e agora disponível 
And: o vôo de “código” “153791” anteriormente comprado e agora disponível
When: seleciono o vôo de “código” “153421”
And: seleciono para “cancelar”
Then: continuo na página de “cancelar vôos”
And: aparece na tela uma mensagem pedindo para digitar a senha e confirmar 
When: seleciono para  retroceder
Then: continuo na página de “cancelar vôos”
And: o vôo de “código” “153421” continua disponível 
And: o vôo de “código” “153791” continua disponível








Cenário: usuário erra sua senha na hora de confirmar o cancelamento de um vôo
Given: usuário logado com login “agênciaturismoAB” e senha “12345”
And: na página de “cancelar vôos”
And: o vôo de “código” “153421” anteriormente comprado e agora disponível 
And: o vôo de “código” “157891” anteriormente comprado e agora disponível
When: seleciono o vôo de “código” “153421”
And: seleciono para “cancelar”
Then: continuo na página de “cancelar vôos”
And: aparece na tela uma mensagem pedindo para digitar a senha e confirmar 
When: digito a senha “123”
And: seleciono para prosseguir
Then: continuo na página de “cancelar vôos”
And: recebo uma mensagem informando que a senha digitada está incorreta
And: o vôo de “código” “153421” continua disponível 
And: o vôo de “código” “157891” continua disponível






Cenário: usuário não tem nenhum vôo comprado
Given: usuário logado com login “agênciaturismoAB” e senha “12345”
And: na página de “cancelar vôos”
And: nenhum vôo foi comprado ou está disponível
When: seleciono para “cancelar”
Then: continuo na página de “cancelar vôos”
And: aparece na tela uma mensagem pedindo para selecionar ao menos um vôo
And: nenhum vôo foi comprado ou está disponível