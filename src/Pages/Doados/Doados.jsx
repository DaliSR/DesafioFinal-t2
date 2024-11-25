import s from "./Doados.module.scss";
import Livro1 from "../../assets/img/protagonista.png";
import Livro2 from "../../assets/img/euestouaqui.png";
import Livro3 from "../../assets/img/coisas.png";

export default function Doados() {
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
        <article>
          <img src={Livro2} alt="capa do Livro 2" />
          <h3>Ainda estou aqui</h3>
          <p>Marcelo Rubens Paiva</p>
          <p>Biografia</p>
        </article>
        <article>
          <img src={Livro3} alt="capa do Livro 3" />
          <h3>Amor pelas coisas imperfeitas</h3>
          <p>Haemin Sunim</p>
          <p>Autoajuda</p>
        </article>
      </section>
    </section>
  );
}
