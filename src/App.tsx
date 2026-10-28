import "./App.css";
import Pacote from "./Pacote";
import type { PacoteType } from "./types";

const data: Array<PacoteType> = [
  {
    id: "ab29d57a-300b-492c-b8fb-98858c9b20c2",
    largura: 20.0,
    altura: 30.0,
    profundidade: 40.0,
    peso: 2.34,
  },
  {
    id: "zd29d67b-300b-492c-b8fb-asi9d7a9dy",
    largura: 40.0,
    altura: 20.0,
    profundidade: 10.0,
    peso: 3.14,
  },
];

function App() {
  return (
    <section>
      <h2>Pacotes</h2>
      <div className="pacotes">
        {data.map((p) => (
          <Pacote pacote={p} key={p.id} />
        ))}
      </div>
    </section>
  );
}

export default App;
