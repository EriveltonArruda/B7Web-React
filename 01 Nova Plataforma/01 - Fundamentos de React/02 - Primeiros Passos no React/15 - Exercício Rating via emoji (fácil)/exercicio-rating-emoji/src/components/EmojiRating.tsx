type EmojiRatingProps = {
  rate: number;
}

const EmojiRating = ({ rate }: EmojiRatingProps) => {
  // Verificação de segurança
  if (rate > 5) rate = 5;
  if (rate < 0) rate = 0;

  // convertendo número inteiro
  const rateInt = Math.floor(rate);

  // repetição das estrelas
  const stars = '🌟'.repeat(rateInt) + '⭐'.repeat(5 - rateInt);

  return (
    // flex para deixar lado a lado
    <div className="flex items-center text-6xl">
      {/* toFixed(1) para exibir um decimal depois do ponto */}
      <div className="bg-gray-700 p-2 rounded">{rate.toFixed(1)}</div>
      <div className="ml-3">{stars}</div>
    </div>
  );
}

export default EmojiRating;