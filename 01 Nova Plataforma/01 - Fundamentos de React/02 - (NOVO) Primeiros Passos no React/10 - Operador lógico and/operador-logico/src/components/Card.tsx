type Props = {
  phrase: string;
  // precisa ser opcional
  author?: string;
}

export const Card = ({ phrase, author }: Props) => {
  if (author) {
    return (
      <div className="w-96 border-2 border-red-600 p-3 text-3xl text-center italic mt-4">
        <h3 className="text-3xl font-vold italic">"{phrase}"</h3>
        <p className="text-right text-sm">- {author}</p>
      </div>
    );
  }
  return (
    <div className="w-96 border-2 border-red-600 p-3 text-3xl text-center italic mt-4">
      <h3 className="text-3xl font-vold italic">"{phrase}"</h3>
      {/* Se não passar author na Props */}
      <p className="text-right text-sm">- Autor Desconhecido</p>
    </div>
  )
}

// Condicional Ternário para evitar DRY
export const CardTernario = ({ phrase, author }: Props) => {
  return (
    <div className="w-96 border-2 border-red-600 p-3 text-3xl text-center italic mt-4">
      <h3 className="text-3xl font-vold italic">"{phrase}"</h3>
      {/* Usando Condicional ternário */}
      <p className="text-right text-sm">- {author ? author : "Autor Desconhecido"}</p>
      {/* Modernização do condicional ternário */}
      <p className="text-right text-sm">- {author ?? "Autor Desconhecido"}</p>
    </div>
  );
}