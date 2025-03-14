## Pré-configurações

Teremos uma lista com id, nome e a profissão das pessoas para exibir na tela.

Antes de renderizar a lista na tela vamos colocar ela dentro de um arquivo chamado peopleList.ts que ficará dentro da pasta data que fica em src.

Como estamos trabalhando com typescript é interessante que tipemos todos os dados, então dentro de src criaremos uma pasta chamada Types e dentro dela um arquivo chamado Person.ts.

Importe o Person no arquivo peopleList.

importe o peopleList na page.tsx.

### Renderizando na tela

Para renderizar a lista na tela utilizaremos uma função do JS chamada map.

Podemos criar uma variável antes do return do Page e armazenar o map dentro dela dessa forma:

```
const list = peopleList.map(person => <li>{person.name}</li>)
```

e em seguida criar uma "ul" dentro do return do page e chamar o list {list}.

Ou podemos criar o map dentro dos colchetes dentro da "ul", é assim que faremos.

### Detalhe da função map()

Sempre que for utilizar um map, lembre-se de que ele exige que você mapeie o item que está sendo retornado com uma key, essa key será o person.id

### Operador lógico &&

Também podemos usar um operador lógico && junto da renderização, colocando a "ul" dentro da condição do operador && a lista só será exibida se a condição for satisfeita, ou seja, se existir dados no arquivo de peopleList, se o array estiver vazio nesse arquivo, a tag "ul" não aparecerá em Page e nenhuma lista será exibida.
