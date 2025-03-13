## Conceito

Podemos renderizar algo na tela a partir de um condicional (isso mesmo, com um if).

### Exemplo

Vamos deixar nosso author como opcional na Props, porque se criarmos um Card na page sem o autor, na condicional podemos deixar como autor desconhecido.

Como você sabe, o componente só pode ter apenas um return, mas isso pode ser evitado com um if, assim podemos ter 2 return porque um return está em escopo de bloco, o return do if só será executado se a condição for verdadeira, caso contrário entrará no return do componente.

Mas usar um if deixa o código muito grande porque estamos repetindo o mesmo código do return e só estamos alterando o parágrafo e isso viola o princípio do DRY (Don't Repeat Yourself).

### Condicional Ternário

Podemos solucionar esse problema utilizando um condicional ternário somente no parágrafo onde tem o author.

### Condicional Ternário Moderno (??)

Podemos resumir ainda mais o condicional ternário com uma modernização do mesmo, perceba que no parágrafo o "author" repete 2x, quando temos uma variável e queremos retornar ela caso ela exista, não precisamos repetir a mesma, podemos fazer da seguinte forma:

```
<p className="text-right text-sm">- {author ?? "Autor Desconhecido"}</p>
```

Lembrando que essa forma funciona apenas em versões mais novas do Javascript.
