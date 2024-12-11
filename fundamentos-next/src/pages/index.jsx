import Navegador from "../components/Navegador";

export default function Home() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexWrap: "wrap",
        height: "100vh",
      }}
    >
      <Navegador destino="/estiloso" texto="Estiloso" />
      <Navegador destino="/exemplo" texto="Exemplo" cor="darkviolet"/>
      <Navegador destino="/jsx" texto="JSX" cor="crimson"/>
      <Navegador destino="/navegacao" texto="Navegacao #01" cor="green"/>
      <Navegador destino="/cliente/sp-2/321" texto="Navegacao #02" cor="blue"/>
      <Navegador destino="/estado" texto="Componente com Estado" cor="pink"/>
    </div>
  );
}
