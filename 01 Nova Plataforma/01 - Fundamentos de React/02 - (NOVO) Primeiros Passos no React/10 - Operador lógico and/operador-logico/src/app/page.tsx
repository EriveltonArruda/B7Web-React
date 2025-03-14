import { Card } from "@/components/Card";

function Page() {
  return (
    <div className="m-2">
      <h1 className="font-bold text-2xl">Olá Mundo!</h1>

      <Card phrase="Alguma frase TOP" author="Coach de milhões" />

      {/* Sem author para entrar na condicional */}
      <Card phrase="Alguma frase TOP" />
    </div>
  )
}

export default Page;
