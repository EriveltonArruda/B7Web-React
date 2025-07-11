## Conceito de JSX

JSX foi criado para se parecer com HTML, mas ele NÃO é HTML.

### Regra 1

Um componente sempre tem que retornar um elemento padrão (root).

Você pode criar uma div com vários elementos dentro, mas o JSX não aceita vários elementos fora de uma div.

Existe uma alternativa caso não queira utilizar uma div, é chamado de "fragment", ele serve como um elemento root, mas não é nenhum elemento, é uma tag sem nome "<> </>".

### Regra 2

Todas as tags precisam ser fechadas porque o JSX não sabe quando uma tag tem auto fechamento (uma img por exemplo).

### Regra 3

Utilize sempre camelCase na hora de usar os atributos que tenham nomes compostos, exemplos:

- onClick
- className
