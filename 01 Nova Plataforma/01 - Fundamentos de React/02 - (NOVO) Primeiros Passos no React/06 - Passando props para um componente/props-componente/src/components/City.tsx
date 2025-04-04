/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// Criando Props
type Props = {
  name: string;
  avatar: string;
  // Deixando opcional  
  location?: string;
  quality: string[];
}

// Utilizando a props
export const City = (props: Props) => {
  // Props em variáveis.
  const { name, location, quality } = props;
  return (
    <div className="p-3">
      {/* Usando Props */}
      <h1 className="text-2xl text-green-500">{props.name} - {props.location}</h1>
      {/* Usando variáveis de props */}
      <h1 className="text-2xl text-green-500">Variáveis de Props = {name} - {location}</h1>
      <img
        src={props.avatar}
        className="w-2xl h-2xl"
      />

      <ul>
        {/* Usando Props */}
        <li>{props.quality[0]}</li>
        <li>{props.quality[1]}</li>
        <li>{props.quality[2]}</li>
        {/* Usando variáveis de props */}
        <li>Variáveis de Props = {quality[0]}</li>
      </ul>
    </div>
  );
}

// Usando props no parâmetro para não usar em variáveis
export const CityProps = ({ name, location, avatar, quality }: Props) => {
  return (
    <div className="p-3">
      <h1 className="text-2xl text-green-500">Props dos parâmetros = {name} - {location}</h1>
      <img
        src={avatar}
        className="w-2xl h-2xl"
      />

      <ul>
        <li>{quality[0]}</li>
        <li>{quality[1]}</li>
        <li>{quality[2]}</li>
      </ul>
    </div>
  );
}