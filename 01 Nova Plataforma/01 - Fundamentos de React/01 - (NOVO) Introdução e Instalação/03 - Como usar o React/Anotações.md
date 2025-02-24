### Componentes

O React trabalha muito com componentização, tudo é baseado em componentes.

Diferente do HTML onde toda a estrutura é feita no HTML, no React vamos criando componentes que são espécies de blocos que são criados em outros arquivos e no arquivo geral são importados para serem utilizados.

Na página inicial da documentação do React dá pra entender melhor o funcionamento de componentes:

https://react.dev/

Nela temos um exemplo de uma interface com um input, alguns vídeos e um botão de like, cada item dessa interface é um componente.

Veja a barra de input da documentação por exemplo:

```
<SearchInput
        value={searchText}
        onChange={newText => setSearchText(newText)} />
```

Esse componente foi criado por um programador em outro arquivo com todas as suas funcionalidades, mas no arquivo app.tsx (que é o equivalente ao index.html) só está sendo chamado, então toda a inferface foi feita basicamente com dois componentes (o Input e o video).

O componente de vídeo por exemplo:

```
<VideoList
        videos={foundVideos}
        emptyHeading={`No matches for “${searchText}”`} />
```

Ele tem um componente geral chamado de VideoList (é o que vai para o arquivo app.tsx), mas dentro desse componente ele tem outros componentes, um para o primeiro vídeo, para o segundo, etc.

Veja o exemplo do componente Vídeo, ele é um componente que tem outros componentes dentro dele:

- Thumbnail (compnente)
- LikeButton (componente do botão)

```
function Video({ video }) {
  return (
    <div>
      <Thumbnail video={video} />
      <a href={video.url}>
        <h3>{video.title}</h3>
        <p>{video.description}</p>
      </a>
      <LikeButton video={video} />
    </div>
  );
}
```
