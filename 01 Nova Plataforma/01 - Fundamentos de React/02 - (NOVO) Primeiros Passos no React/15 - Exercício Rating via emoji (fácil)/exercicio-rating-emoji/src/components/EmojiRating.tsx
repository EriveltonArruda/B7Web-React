type EmojiRatingProps = {
  rate: number;
}

const EmojiRating = ({ rate }: EmojiRatingProps) => {
  // Verificação de segurança
  if (rate > 5) rate = 5;
  if (rate < 0) rate = 0;

  // Emojis
  const rateInt = Math.floor(rate);

  const stars = '😄'.repeat(rateInt) + '😶'.repeat(5 - rateInt);

  return (
    <div className="flex items-center text-6xl">
      <div className="bg-gray-700 p-2 rounded">{rate.toFixed(1)}</div>
      <div className="ml-3">{stars}</div>
    </div>
  );
}

export default EmojiRating;