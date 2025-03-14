## Conceito

O operador lógico vai executar a ação depois do && se a primeira condição for verdadeira.

### Exemplo

Quero que o parágrafo do autor só apareça se o autor for definido na page.

Então abrimos colchetes, colocamos o author (que é a condição) e os && com a ação que será executada caso exista um author (condição), nesse exemplo o parágrafo será a ação que será executada caso o author exista.

```
{author &&
  <p className="text-right text-sm">- {author}</p>
}
```

Se não tiver um author na page.tsx, o parágrafo não vai nem existir na página.

Esse operador segue a mesma lógica do JSX, onde só pode retornar um elemento, se quiser retornar mais de um elemento, envolva-o em uma div ou em um fragment.
