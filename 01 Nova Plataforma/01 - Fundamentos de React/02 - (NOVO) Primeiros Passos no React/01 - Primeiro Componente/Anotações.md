## Disclaimer

O professor optou por usar Next como Framework do React, mas quando tiver uma funcionalidade que seja do Next ele vai avisar.

### Arquivo principal

Tanto no React quanto no Next, a página principal fica na pasta src/app, o nome do arquivo é o page.tsx;

### O que é componente?

Quase tudo no React é feito por componente.

Componente nada mais é do que um trecho de código que podemos usar em determinado local e aquele trecho de código vai exibir uma ou mais estruturas.

A primeira página do projeto React por exemplo é um componente que tem vários componentes dentro que montam a página.

### Como criar um componente?

Componentes geralmente são criados a partir de funções e elas retornam código JSX.

O código de retorno pode ser colocado dentro de parênteses ou fora, mantenha o hábito de deixar dentro de parênteses.

Para que o componente apareça na página web, é necessário exportar o componente, só o ato de criar não faz com que ele apareça.

Também podemos criar uma função anônima como componente, tem um snippet chamado "sfc (Stateless Function Component)" que cria uma função anônima e já cria o exportador junto.

### return

Todo componente retorna apenas um único elemento, então se você colocar um h1 e o h3 dentro do return ocasionará um erro, se quiser renderizar os dois elementos na tela, coloque-os dentro de uma div.

### className

O componente nos retorna um código JSX, apesar de se parecer com HTML, JSX NÃO é HTML, então para adicionar uma classe do Tailwind nele não usamos "class" como é no HTML, usamos className.
