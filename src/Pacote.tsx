import "./Pacote.css";
import type { PacoteType } from "./types";
type PacoteProps = {
  pacote: PacoteType;
};
export default function Pacote({ pacote }: PacoteProps) {
  return (
    <div className="pacote">
      <dt>id</dt>
      <dd title={pacote.id}>{pacote.id.substring(24)}</dd>
      <dt>largura (cm)</dt>
      <dd>{pacote.largura}</dd>
      <dt>profundidade (cm)</dt>
      <dd>{pacote.profundidade}</dd>
      <dt>Peso (kg)</dt>
      <dd>{pacote.profundidade}</dd>
    </div>
  );
}
