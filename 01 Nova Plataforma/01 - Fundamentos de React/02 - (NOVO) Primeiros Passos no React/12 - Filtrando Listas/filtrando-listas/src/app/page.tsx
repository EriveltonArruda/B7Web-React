// Importando a lista
import { peopleList } from '@/data/peopleList';

const Page = () => {
  // filtrando os dados
  const chemists = peopleList.filter(person => person.profession === 'chemist');

  return (
    <div className="m-2">
      <h1 className="font-bold text-2xl">Olá Mundo</h1>

      {/* renderizando na tela */}
      {chemists.length > 0 &&
        <>
          <h3 className='text-green-300'>Lista de químicos:</h3>
          <ul>
            {chemists.map(person =>
              <li key={person.id}>{person.name}</li>
            )}
          </ul>
        </>
      }
    </div>
  );
}

export default Page;