## Organizar componentes

Sempre que você for criar componentes, crie uma pasta chamada "components" dentro de src, dessa forma todos os componentes ficam em um lugar de forma organizada, a extensão padrão é tsx.

Geralmente, o padrão para criar um componente é que ele seja criado com letra inicial maiúscula.

### Exportação de componente

Temos 2 formas de exportar o componente:

- export default.
- export.

### Diferenças entre export default e export

A diferença entre os dois vai ser na hora de importar, componentes que são exportados de forma default (padrão) podem ser chamados de qualquer nome na hora da importação.

default significa padrão, é usado para exportar um único valor por arquivo.

Export permite exportar múltiplos valores de um mesmo arquivo.

Só exportamos de forma padrão páginas completas, componentes auxiliares exportamos com o export normal.

### Importação default

Para usar um componente que foi exportado é necessário importar na página que vamos utilizar o componente, como vamos utilizar no arquigo Page.tsx, é lá que importaremos.

Para importar utilizamos o comando "import" e podemos chamar pelo nome de componente ou criamos um nome pra ele, quando importamos um componente com exportação default, colocamos o nome do componente que estamos importando e de onde ele é (from), o @ é um atalho do Next e vai fazer referência ao local do projeto, esse @ significa que vai buscar na pasta raiz, então a partir da raiz selecionamos a pasta e o arquivo do componente.

Com a importação default tudo do componente será importado.

### Importação export normal

Quando importamos com o export, precisamos dizer dentro dos colchetes quais são os itens que estão sendo importados do componente, ou seja, fazemos importação dos itens individualmente.

Caso queira saber quais os itens que tem dentro de um componente, aperte ctrl + espaço e o autocomplete mostrará os itens que aquele componente tem.

### Importação dupla

Se um componente tiver as duas exportações (default e normal) em um mesmo arquivo, você importa assim:

```
import Square, {Circle} from '@/components/Geo'
```