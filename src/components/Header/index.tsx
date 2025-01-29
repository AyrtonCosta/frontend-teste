import { Link, Route, Routes } from "react-router-dom";
import  BuscarCep  from "../BuscarCep";
import Noticias from "../Noticias";

export default function Header() {
  return (
    <div>
      <nav>
        <ul className="nav">
          <button>
            {" "}
            <li>
              <Link className="nav-link" to="/buscar-cep">BUSCAR CEP</Link>
            </li>
          </button>
          <button>
            {" "}
            <li>
              <Link className="nav-link"to="/noticias">GERENCIADOR DE NOTICIAS</Link>
            </li>
          </button>
        </ul>
      </nav>
      <Routes>
        <Route path="/buscar-cep" element={<BuscarCep/>} />
        <Route path="/noticias" element={<Noticias/>} />
      </Routes>
    </div>
  );
}
