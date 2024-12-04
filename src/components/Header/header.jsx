import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import logo from "../../assets/img/2702154 1logo.png";
import search from "../../assets/img/search.png";

import Inicio from "../../Pages/Inicio/Inicio";
import Doados from "../../Pages/Doados/Doados";
import QueroDoar from "../../Pages/QueroDoar/QueroDoar";
import s from "./header.module.scss";

export default function header() {
  return (
    <BrowserRouter>
      <header className={s.header}>
        <section className={s.logoHeader}>
          <img src={logo} alt="imagem de um livro" />
          <h1>Livros Vai na Web</h1>
        </section>
        <nav className={s.navHeader}>
          <ul>
            <li>
              <Link className={s.link} to="/">
                Inicio
              </Link>
            </li>
            <li>
              <Link className={s.link} to="/Doados">
                Livros Doados
              </Link>
            </li>
            <li>
              <Link className={s.link} to="/QueroDoar">
                Quero Doar
              </Link>
            </li>
          </ul>
        </nav>
        <div className={s.barraDeBusca}>
          <input type="text" placeholder="O que você procura?" />
          <img src={search} alt="Icone de lupa branca" />
        </div>
      </header>

      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="/Doados" element={<Doados />} />
        <Route path="/QueroDoar" element={<QueroDoar />} />
      </Routes>
    </BrowserRouter>
  );
}
