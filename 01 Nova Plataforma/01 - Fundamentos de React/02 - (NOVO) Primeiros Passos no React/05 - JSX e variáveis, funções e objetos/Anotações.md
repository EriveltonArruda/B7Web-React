### Variáveis

Como estamos usando React, mantenha o hábito de criar as variáveis usando typescript.

Depois de criar a variável, chamamos ela dentro de colchetes onde queremos usar.

É importante saber o que acontece "por debaixo dos panos" quando abrimos colchetes, basicamente o Javascript vai entender que é um lugar para colocar uma expressão, ou seja, código Javascript (qualquer código JS).

Também podemos colocar variáveis dentro de propriedades de elementos.

### Funções

Para executar as funções dentro do JSX fazemos da mesma forma da variável, afinal de contas o JS identifica os colchetes como um lugar para colocar uma expressão e uma função é um código JS.

### Objetos

Para exemplificar sobre os objetos vamos usar um css inline, lembre-se que JSX não é HTML, então não funcionará com ="", por isso abra os colchetes e dentro dele coloque o objeto, como que criamos objetos? com colchetes, então ficarão 2 colchetes (um para a expressão JS e outro para o objeto em si).

Essa é uma das formas de se usar objetos, nesse caso acima foi inline, mas também podemos criar o objeto como criamos no JS e para usá-lo é só colocar dentro do colchete chamando o objeto e sua propriedade.