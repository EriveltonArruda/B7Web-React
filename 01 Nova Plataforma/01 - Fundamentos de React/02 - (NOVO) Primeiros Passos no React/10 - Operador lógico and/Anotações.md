## Conceito

O operador AND (&&) só executa as condições caso AMBAS sejam verdadeiras.

### Exemplo

Quero que o parágrafo do autor só apareça se o autor for definido na page.

Então abrimos colchetes e colocamos o author e os && com a condição que será executada caso exista um author, essa condição é o nosso parágrafo que contém o author.

```
{author &&
  <p className="text-right text-sm">- {author}</p>
}
```

Se não tiver um author na page.tsx, o parágrafo não vai nem existir na página.

Esse operador segue a mesma lógica do JSX, onde só pode retornar um elemento, se quiser retornar mais de um elemento, envolva-o em uma div ou em um fragment.
