import { GeoForm } from '@/components/GeoForm';

function Page() {
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá Mundo!</h1>
      <h3>Algum outro texto</h3>

      {/* Usando Componente que tem outro componente */}
      <GeoForm />
    </div>
  )
}

export default Page;
