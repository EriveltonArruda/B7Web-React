import { Card, CardReactNode } from "@/components/Card";

function Page() {
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá Mundo!</h1>

      <Card>
        Frase de Efeito!
      </Card>

      <CardReactNode>
        <>
          <h3 className="text-3xl font-bold italic">Frase de efeito!</h3>
          <p className="text-right text-sm">- Autor desconhecido</p>
        </>
      </CardReactNode>
    </div>
  )
}

export default Page;
