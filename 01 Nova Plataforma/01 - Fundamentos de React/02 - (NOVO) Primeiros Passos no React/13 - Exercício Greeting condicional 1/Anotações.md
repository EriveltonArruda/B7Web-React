## Exercício

Consiste em criar uma tela que pegue a hora do computador e exiba na tela, dependendo da hora, terá a mensagem abaixo de "bom dia", "boa tarde" ou "boa noite".

### áreas das divs

Na página principal serão criadas as áreas que serão utilizadas, um container alinhado com flex e com um gradiente e duas áreas dentro dele, uma área para a hora e uma área para a mensagem.

### Primeiro passo

Vamos pegar a hora de uma forma que já venha formatada, utilizamos o intl.DateTimeFormat para isso.

Em seguida colocamos a variável fullTime na área do relógio.

### Condicionais

O próximo passo é criar as condicionais que vão mostrar as mensagens baseadas na hora.

Podemos fazer de duas formas:

1. Diretamente no JSX
2. Criar uma variável e usar ela no JSX.

Faremos da segunda forma nessa aula e diretamente no JSX ficará para a próxima aula.

Pegamos a hora atual usando o new Date().getHours().

Também criaremos uma variável chamada "greetings" para armazenar dentro dela a mensagem criada na condicional.

Basicamente faremos um if com os horários relacionados a manhã, tarde e noite e em seguida vamos colocar essa variável greetings dentro da área da mensagem.
