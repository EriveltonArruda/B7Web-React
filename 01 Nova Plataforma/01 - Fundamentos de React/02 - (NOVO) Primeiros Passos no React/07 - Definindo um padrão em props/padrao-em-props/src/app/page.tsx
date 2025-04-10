import { City } from "@/components/City";

function Page() {
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá Mundo!</h1>

      {/* Usando props do componente */}
      <City
        name="João Pessoa"
        location="Paraíba"
        avatar="https://caminhosmelevem.com/wp-content/uploads/2023/11/joao-pessoa-paraiba-31.jpg"
        quality={["Ótima cidade para morar.", "Tem várias vagas de React.", "Mais barato que Recife."]}
      />
      <City
        name="Recife"
        location="Pernambuco"
        avatar="https://uploads.grupodicas.com/2024/04/recife.jpg"
        quality={["Tem ótimas praias", "Mas tem que ter cuidado com tubarão"]}
      />
      <City
        name="Gravatá"
        location="Pernambuco"
        quality={["Só presta pra morar se tiver dinheiro", "Se conseguir emprego home-office você está feito"]}
      />

    </div>
  )
}

export default Page;
