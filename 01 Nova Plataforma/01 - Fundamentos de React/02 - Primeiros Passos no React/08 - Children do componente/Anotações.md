## Conceito

Children permite o componente receber outros conteúdos dentro dele sem ser pelas propriedades.

### Componente Card

Esse componente receberá nos parâmetros uma props que tem um children.

Seu retorno será basicamente o children que está na props, assim quando chamarmos esse componente lá na page.tsx, o conteúdo que colocarmos dentro do componente será o children.

### Usando o children

Para usar um children dentro do componente precisamos chamar o componente na página principal (page.tsx) como um elemento HTML, sem auto fechamento, mas com uma tag de abertura e uma tag de fechamento e dentro dele colocamos o que queremos passar para o children do componente.

### ReactNode

Note que quando o children foi criado na Props, ele foi criado para aceitar somente string e não é legal deixar assim, queremos que o children receba qualquer tipo de dado, para fazer com que o children receba qualquer tipo de dado utilizamos o ReactNode (precisa ser importado).

Importante lembrar que como é um componente ele entra na regra do JSX, então ele só vai ter retorno de apenas um elemento e se você quiser mostrar mais de um elemento (como um h3 e um parágrafo) você precisará colocar os elementos dentro de uma div ou dentro de um fragment na hora de chamar o componente na page.tsx.