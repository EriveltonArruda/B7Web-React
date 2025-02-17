## Documentação oficial

https://react.dev/

### O que é o React?

É uma biblioteca de JS, muita gente acha que é um framework, mas é uma biblioteca.

A principal diferença entre biblioteca e framework, é que a biblioteca é uma ferramenta, basicamente conseguimos aplicar React em um projeto já existente, apesar de também poder criar o projeto já com React e que geralmente é feita dessa forma, no caso do framework não podemos aplicar em um projeto existente, apenas criar com o framework.

O React é feita para o front-end.

### Diferença entre HTML/CSS/JS e React

Para entender melhor do porque usar React no lugar de HTML/CSS/JS, imagine que você está criando uma loja virtual, um dos recursos da loja virtual é o carrinho de compras, geralmente tem um contador mostrando quantos itens existem nesse carrinho, com React podemos associar o número do contador com um item na memória que mostra quais e quantos são os itens que estão no carrinho de compras, basicamente temos os itens na memória do sistema e podemos associar esses itens ao número que está na interface mostrando quantos itens tem, assim quando adicionar mais um item no carrinho, não precisamos nos preocupar com o que está aparecendo na tela, porque como foi feita uma associação do item da memória com o que está aparecendo na tela, automaticamente o número da tela será atualizado.

No HTML/CSS/JS não tem essa interação, quando adicionasse um novo item no carrinho teríamos que selecionar o elemento com JS (digamos que tenham 2 itens) e trocar para o número 3, você quem teria que ir na interface e fazer as alterações para que ela ficasse atualizada.

Com React isso não é necessário porque fazemos as associações de forma que quando algo for alterado na memória, automaticamente será refletido na interface, isso faz com que a interface fique interativa fazendo com que a parte visual funcione integrado com as informações do sistema.
