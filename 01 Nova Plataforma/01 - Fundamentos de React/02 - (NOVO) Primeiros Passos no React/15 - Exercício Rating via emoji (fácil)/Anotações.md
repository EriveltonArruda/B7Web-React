## Exercício

Crie um componente para ser usado na Page.

Esse componente deve receber uma nota como Prop que seja entre 0 e 5.

Cada nota representa um emoji feliz (geralmente se usam estrelas, mas aqui são emojis felizes).

### Passo a passo

Criaremos a pasta components e dentro dela um arquivo chamado EmojiRating.tsx

Dentro desse arquivo criaremos a Props e vamos colocá-la no parâmetro do componente EmojiRating.

### page.tsx

Agora importamos o componente EmojiRating e chamamamos o componente com a prop rate e o valor dentro da div.

### EmojiRating

A primeira coisa que precisamos fazer nesse componente é criar uma verificação de segurança para que seja aceito somente de 0 a 5, então se colocar um valor maior que 5 na prop ele será 5 e se colocar um valor negativo ele será 0, afinal de contas nosso rating só aceita de 0 a 5.

Agora que a verificação foi feita, precisamos exibir tanto o rate quanto as estrelas, então dentro da div do return vamos criar mais duas divs (uma para o rate e outra para as estrelas).

### rateInt

Agora precisamos converter o emoji em número usando o Math.floor porque quero arredondar sempre pra baixo o resultado.

### stars

Dentro dessa variável será passado o valor convertido em número (rateInt), então colocamos o emoji que será exibido quando passarem um valor para rate na prop da page.tsx e usamos uma função chamada repeat para repetir a quantidade de vezes que foi passada na prop de page.tsx, então se passarem 3 na prop, serão exibidas 3 estrelas.

Também podemos passar a stars para dentro da div de stars.

Em seguida precisamos colocar as estrelas que não foram avaliadas, então se na prop forem passadas 3 estrelas, sobrarão 2 estrelas.

Para fazer isso só precisamos concatenar o emoji da estrela que não recebeu o rate e no repeat apenas colocamos 5 - rateInt, ou seja, vai repetir 5 vezes MENOS as estrelas que já foram passadas dentro do rate da prop.
