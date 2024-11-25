import s from "./Doados.module.scss";
import Livro1 from "../../assets/img/download01.png";
import Livro2 from "../../assets/img/euestouaqui.png";
import Livro3 from "../../assets/img/coisas.png";
import Livro4 from "../../assets/img/cafe.png";

export default function Doados() {
  return (
    <section className={s.doados}>
      <div>
        <h2>Livros Doados</h2>
      </div>

      <section className={s.livros}>
        <article>
          <img src={Livro1} alt="Capa do Livro 1" />
          <p>
            <strong>Título:</strong> O protagonista
          </p>
          <p>
            <strong>Autor:</strong> Suzanne Andrade
          </p>
          <p>
            <strong>Categoria:</strong> Ficção
          </p>
        </article>
        <article>
          <img src={Livro2} alt="capa do Livro 2" />
          <p>
            <strong>Título:</strong> Ainda estou aqui
          </p>
          <p>
            <strong>Autor:</strong> Marcelo Rubens Paiva
          </p>
          <p>
            <strong>Categoria:</strong> Biografia
          </p>
        </article>
        <article>
            <img src={Livro3} alt="capa do Livro 3" />
            <p>
            <strong>Título:</strong> Amor pelas coisas imperfeitas
          </p>
          <p>
            <strong>Autor:</strong> Haemin Sunim
          </p>
          <p>
            <strong>Categoria:</strong> Autoajuda
          </p>

        </article>
        <article>
            <img src={Livro4} alt="capa do Livro 4" />
            <p>
            <strong>Título:</strong> Antes que o Café Esfrie
          </p>
          <p>
            <strong>Autor:</strong> Toshikazu Kawaguchi
          </p>
          <p>
            <strong>Categoria:</strong> Romance
          </p>

        </article>
      </section>
    </section>
  );
}
