// Importando um componente export default
// componentes que são export default podem ser chamados de qualquer nome na hora da importação.
import Quadrado from '@/components/square';
// Importando um componente export normal.
// fazemos importação dos itens individualmente.
import { Square, Circle } from '@/components/Geo'
// importando um componente default e export normal
import Quad, { Redondo } from '@/components/deafult-normal';

function Page() {
  return (
    <div>
      <h1 className="font-bold text-2xl">Olá Mundo!</h1>
      <h3>Algum outro texto</h3>

      {/* Usando Componentes importados */}
      <Quadrado />
      <Square />
      <Circle />
      <Quad />
      <Redondo />
    </div>
  )
}

// Outra forma de usar export (default)
export default Page;
