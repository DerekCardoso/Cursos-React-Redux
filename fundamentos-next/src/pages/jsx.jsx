export default function Jsx() {
  const titulo = <h1>JSX é um conceito Central</h1>;

  function subtitulo() {
    return <h2>{"Legal mesmo hein".toUpperCase()}</h2>;
  }
  return (
    <div>
      {titulo}
      {subtitulo()}
      <p>{JSON.stringify({ nome: "João", idade: 30 })}</p>
    </div>
  );
}
