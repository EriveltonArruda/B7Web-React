## DOM

O DOM são os elementos que estão sendo apresentados na tela no navegador.

Quando clicamos em um elemento que tem uma ação, estamos fazendo uma manipulação do DOM.

Imagine um botão em formato de coração onde ele está sem cor e ao clicar nele a cor é preenchida, para fazer com que o coração seja preenchido precisamos manipular o DOM.

### DOM Virtual

Nele temos o elemento que está sendo mostrado de fato na tela e temos uma cópia desse elemento na memória, é uma espécie de clone.

Continuando com o exemplo do coração, ao clicar no coração para preencher com a cor, essa alteração será feita no DOM Virtual, isso porque está na memória e a memória RAM é o item mais rápido do computador, então essa alteração é instantânea.

Depois que essa alteração é feita, acontecerá uma comparação do DOM Virtual com o DOM que está aparecendo na tela e ai o React vê o que foi alterado no DOM Virtual e faz a alteração no DOM (que no caso foi só o coração) assim evitando de atualizar toda a div que contém o coração em efeito de cascata por exemplo, isso dá uma otimização do que está sendo alterado na tela.
