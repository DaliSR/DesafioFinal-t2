import s from "./QueroDoar.module.scss";
import iconeLivro from "../../assets/img/Frame.png";
import axios from "axios";
import { useState } from "react";

export default function QueroDoar() {
  const [titulo, setTitulo] = useState("");
  const [categoria, setCategoria] = useState("");
  const [autor, setAutor] = useState("");
  const [imagem_url, setImagem_url] = useState("");

  const enviarDados = async () => {
    const urlApi = "https://desafio-vnw-flask-livros-api.onrender.com/doar";

    const dadosEnviar = {
      titulo,
      categoria,
      autor,
      imagem_url,
    };

    await axios.post(urlApi, dadosEnviar);

    alert("Livro enviado!");

    setTitulo("");
    setCategoria("");
    setAutor("");
    setImagem_url("");
  };

  const capturaTitulo = (e) => {
    setTitulo(e.target.value);
    console.log(e.target.value);
  };

  const capturaCategoria = (e) => {
    setCategoria(e.target.value);
  };

  const capturaAutor = (e) => {
    setAutor(e.target.value);
  };

  const capturaImagem = (e) => {
    setImagem_url(e.target.value);
  };

  return (
    <section className={s.queroDoar}>
      <section className={s.container}>
        <h2>
          Por favor, preencha o formulário com suas informações e as informações
          do Livro
        </h2>
        <form onSubmit={(e) => e.preventDefault()}>
          <div>
            <img src={iconeLivro} alt="ícone de livro" />
            <h3>Informações do Livro</h3>
          </div>

          <input
            type="text"
            name=""
            id=""
            placeholder="Título"
            onChange={capturaTitulo}
            value={titulo}
          />

          <input
            type="text"
            name=""
            id=""
            placeholder="Categoria"
            onChange={capturaCategoria}
            value={categoria}
          />

          <input
            type="text"
            name=""
            id=""
            placeholder="Autor"
            onChange={capturaAutor}
            value={autor}
          />

          <input
            type="text"
            name=""
            id=""
            placeholder="Link da Imagem"
            onChange={capturaImagem}
            value={imagem_url}
          />
          <input
            className={s.doar}
            type="submit"
            value="Doar"
            onClick={enviarDados}
          />
        </form>
      </section>
    </section>
  );
}
