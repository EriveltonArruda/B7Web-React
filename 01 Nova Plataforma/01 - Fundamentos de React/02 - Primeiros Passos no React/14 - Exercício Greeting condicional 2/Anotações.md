## Explicação

Nessa aula a condição será feita dentro do JSX.

Perceba que foi usado o operador lógico AND (&&), como sabemos, o operador lógico vai executar a ação depois do && se a primeira condição for verdadeira, então como temos 3 condições, a mensagem será executada se as duas condições anteriores forem verdadeiras, dessa forma não precisamos criar a variável greetings.

### Dica

Como boa prática, sempre crie condicionais que sejam "excludentes", imagine que a sua segunda condição de "bom dia" esteja com o "hour <= 12", isso fará com que a condicional de "bom dia" e de "boa tarde" sejam executadas porque na condicional de "bom dia" o valor é menor ou IGUAL a 12 e na condicional de "boa tarde" o valor é maior ou IGUAL a 12.
