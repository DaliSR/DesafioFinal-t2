import s from "./Doados.module.scss";
import Livro1 from "../../assets/img/protagonista.png";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Doados() {
  const [livros, setLivros] = useState([]);

  const getLivros = async () => {
    const response = await axios.get(
      "https://desafio-vnw-flask-livros-api.onrender.com/livros"
    );
    setLivros(response.data);
    console.log(response);
  };
  useEffect(() => {
    getLivros();
  }, []);

  return (
    <section className={s.boxDoados}>
      <h2>Livros Doados</h2>

      <section className={s.boxLivros}>
        <article>
          <img src={Livro1} alt="Capa do Livro 1" />
          <h3>O protagonista</h3>
          <p>Suzanne Andrade</p>
          <p>Ficção</p>
        </article>
        {livros.map((item) => (
          <article key={item.id}>
            <img src={item.imagem_url} alt={`imagem do livro: ${item.livro}`} />
            <h3>{item.titulo}</h3>
            <p>{item.categoria}</p>
            <p>{item.autor}</p>
          </article>
        ))}
      </section>
    </section>
  );
}
