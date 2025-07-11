type Props = {
  phrase: string;
  // precisa ser opcional
  author?: string;
}

export const Card = ({ phrase, author }: Props) => {
  return (
    <div className="w-96 border-2 border-red-600 p-3 text-3xl text-center italic mt-4">
      <h3 className="text-3xl font-bold italic">"{phrase}"</h3>
      {/* Operador AND && */}
      {author &&
        <p className="text-right text-sm">- {author}</p>
      }

      {/* Funciona na negativa também */}
      {!author && <p className="text-right text-sm italic">- Autor Desconhecido</p>}
    </div>
  );
}