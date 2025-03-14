// Importando a lista
import { peopleList } from '@/data/peopleList';

const Page = () => {
  // pode ser feito assim
  const list = peopleList.map(person => <li key={person.id}>{person.name} - {person.profession}</li>);
  return (
    <div className="m-2">
      <h1 className="font-bold text-2xl">Olá Mundo</h1>

      {/* A lista só será exibida se tiver dados no arquivo peopleList */}
      {peopleList.length > 0 &&
        <ul>

          <li className='font-bold text-2xl text-green-500 py-2'>Lista da variável</li>
          {/* chamando a variável list que contém o map */}
          {list}

          {/* Renderizando a lista diretamente, sem precisar da variável */}
          {/* O li é só para estilização, não é necessário, coloquei só para diferenciar */}
          <li className='font-bold text-2xl text-green-500 py-2'>Lista com map sem variável</li>
          {peopleList.map(person => <li key={person.id}>{person.name} - {person.profession}</li>)}
        </ul>
      }
    </div>
  );
}

export default Page;