// criação de componente (pode usar arrow function também)
function Page() {
  // Componentes geralmente são criados a partir de funções e elas retornam código JSX.
  // O código de retorno pode ser colocado dentro de parênteses ou fora, mantenha o hábito de deixar dentro de parênteses.
  return (
    // Todo componente retorna apenas um único elemento, 
    // Se você colocar um h1 e o h3 dentro do return ocasionará um erro, 
    // se quiser renderizar os dois elementos na tela, coloque-os dentro de uma div.
    <div>
      {/* Estilizando com Tailwind, utilizamos className no lugar de class */}
      <h1 className="font-bold text-2xl">Olá Mundo!</h1>
      <h3>Algum outro texto</h3>
    </div>
  )
}

// Para que o componente apareça na página web, é necessário exportar o componente, só o ato de criar não faz com que ele apareça.
export default Page;
