// Função que será utilizada no componente
const getWeekDay = (today: Date) => {
  return new Intl.DateTimeFormat("pt-BR", { weekday: "long" }).format(today);
}

export const City = () => {
  // Objeto
  const data = {
    location: "Paraiba - PB",
    alt: "Foto de João Pessoa",
    quality: ["Ótima cidade para morar.", "Tem várias vagas de React.", "Mais barato que Recife."]
  };

  // Variáveis
  const city: string = "João Pessoa";
  const avatar: string = "https://caminhosmelevem.com/wp-content/uploads/2023/11/joao-pessoa-paraiba-31.jpg";
  const alt: string = "Foto de João Pessoa"
  const today: Date = new Date();

  return (
    <>
      {/* Usando variáveis e funções */}
      <h1>{city} - {getWeekDay(today)}</h1>
      {/* Usando propriedades do objeto */}
      <p>{data.location}</p>
      <img
        // Usando variável dentro da propriedade
        src={avatar}
        // Usando propriedades do objeto
        alt={data.alt}
        className="w-2xl h-2xl"
      />

      <ul>
        {/* Usando Objetos inline no JSX */}
        <li style={{ color: "green", fontSize: '30px' }}>{data.quality[0]}</li>
        <li>{data.quality[1]}</li>
        <li>{data.quality[2]}</li>
      </ul>
    </>
  );
}