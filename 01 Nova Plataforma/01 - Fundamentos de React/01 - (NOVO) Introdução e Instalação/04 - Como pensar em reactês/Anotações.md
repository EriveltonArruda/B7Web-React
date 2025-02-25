### Como o React funciona?

1. Informações estão na memória, não espalhadas.

Tomando como exemplo do componente de vídeo que está na documentação, como que geralmente criamos uma estrutura daquela com vídeo em HTML?
Criamos a div, colocamos as informações (título, texto e vídeo) e se tívermos mais de um vídeo, simplesmente copiamos a primeira div e alteramos somente as informações, dessa forma as informações estão "espalhadas" no HTML.

No React funciona de forma diferente, como geralmente as informações ficam na memória, o React tem na memória a lista dos vídeos, thumbs e títulos que serão exibidos, essas informações são salvas em formato JSON, basicamente um array com a lista dos vídeos (thumbs e títulos) que serão exibidos, dessa forma a lista não fica espalhada no código mas sim em um local específico.

2. Pense em termos de COMPONENTE.

3. Conceito de DRY (Don't Repeat Yoursefl(não se repita)).

Quando temos repetição de estruturas, o ideal é que coloquemos essa estrutura em um componente, dessa forma evitamos repetir códigos que serão iguais, isso deixa nosso código principal muito mais limpo porque só vamos usar o componente.

Quando fizermos alguma alteração no componente, em todo lugar que o componente foi utilizado será atualizado, assim melhora a manutenção do código porque precisamos modificar em apenas um lugar.

Não crie códigos repetidos.

4. Identifique ONDE os dados precisam estar.

Ainda com o exemplo do componente de vídeos que tem na documentação, onde os vídeos precisam estar para que todos tenham acesso a eles?
Na estrutura do componente de vídeos temos o campo de busca, a lsita de vídeos e o vídeo, então ONDE temos que colocar os dados para que esses itens tenham acesso a eles?

Precisamos deixar o Array de vídeos ANTES de todos os itens, dessa forma ele será o pai e todos os filhos terão acesso à ele:

- Array de vídeos
  - Campo de busca (acesso aos vídeos para fazer a filtragem);
  - Lista de vídeos (exibição dos vídeos);
    - Um vídeo (captar as informações da lista);

5. Fluxo de dados

Imagine que um usuário digitou algo no campo de busca e você saber o que foi digitado nesse campo para poder realizar a busca, como fazer isso?
No Javascript você precisa selecionar o elemento do campo de busca e pegar o que estava escrito lá para poder fazer a busca.

No React funciona de forma diferente, lembre que o React tem um DOM Virtual, então quando um usuário digita algo no campo de busca, esse dado vai para a memória (ou DOM Virtual), então acontece uma ação que vai alterar o texto que está na memória, digamos uqe o usuário digitou "oi" e logo após digitou "A", o que acontecerá é que a letra A vai para a memória do React para ser adicionada junto ao "oi" e logo em seguida será exibido no campo de busca para o usuário, ou seja, o dado vai primeiro para a memória e só depois vai para o elemento.

Em comparação com o HTML, o fluxo acontece assim:

HTML:

-> CAMPO -> digito NO campo <- pego a informação selecionando o elemento e vejo o que está digitado nele.

React:

-> CAMPO -> digito NA MEMÓRIA -> atualizado no campo.
