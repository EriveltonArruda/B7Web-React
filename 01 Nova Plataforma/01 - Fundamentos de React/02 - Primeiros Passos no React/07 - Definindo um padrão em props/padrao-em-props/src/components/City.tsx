/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
// Criando Props
type Props = {
  name: string;
  // Propriedade com valor padrão (precisa ser opcional)
  avatar?: string;
  location: string;
  quality: string[];
}

export const City = ({ name,
  location,
  quality,
  // Valor padrão da prop
  avatar = "https://i.ytimg.com/vi/7ovS_B82VNc/maxresdefault.jpg"
}: Props) => {
  return (
    <div className="p-3">
      {/* Usando variáveis de props */}
      <h1 className="text-2xl text-green-500">{name} - {location}</h1>
      <img
        src={avatar}
        className="w-2xl h-96"
      />

      <ul>
        <li>{quality[0]}</li>
        <li>{quality[1]}</li>
        <li>{quality[2]}</li>
      </ul>
    </div>
  );
}