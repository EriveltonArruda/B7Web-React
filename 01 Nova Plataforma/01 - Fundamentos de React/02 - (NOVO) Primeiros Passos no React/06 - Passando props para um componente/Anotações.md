## Conteito de Props

Props são propriedades do componente que criamos, são as informações obrigatórias que um componente deve receber, funciona igual a interface (ou um type) em orientação a objetos.

Usando props nos permite ter dados personalizados de um componente.

### Usando props

Quando chamamos um componente na página principal temos que passar os atributos (propriedades) que serão obrigatórios, esses atributos são as props que foram criadas no componente.

Assim podemos usar o mesmo componente com dados personalizados, usando o componente de cidade como exemplo, podemos usar o mesmo componente "City" e nos atributos definimos diferentes cidades, mas estamos usando o mesmo componente.

### Criando Props

Criamos props com um type, podemos definir qualquer nome para uma props, mas como exemplo vamos criar com o nome Props mesmo.

Dentro da props nós colocamos as propriedades obrigatórias e como estamos usando Typescript já vamos definir o tipo de cada propriedade.

Precisamos definir a props dentro dos parâmetros da função do componente para que possamos utilizar.

### Dica sobre uso das props

Para aumentar a produtividade você pode criar as props como variáveis, assim não precisa colocar "props.name", "props.avatar", etc.

Caso não queira colocar em variáveis, você pode colocar dentro do próprio parâmetro.

```
export const City = ({ name, location, quality }: Props)
```