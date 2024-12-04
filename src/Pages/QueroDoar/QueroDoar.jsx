import s from "./QueroDoar.module.scss";
import iconeLivro from "../../assets/img/Frame.png";

export default function QueroDoar() {
  return (
    <section className={s.queroDoar}>
      <section className={s.container}>
        <h2>
          Por favor, preencha o formulário com suas informações e as informações
          do Livro
        </h2>
        <form action="">
          <div>
            <img src={iconeLivro} alt="ícone de livro" />
            <h3>Informações do Livro</h3>
          </div>

          <input type="text" name="" id="" placeholder="Título" />

          <input type="text" name="" id="" placeholder="Categoria" />

          <input type="text" name="" id="" placeholder="Autor" />

          <input type="text" name="" id="" placeholder="Link da Imagem" />
          <input className={s.doar} type="submit" value="Doar" />
        </form>
      </section>
    </section>
  );
}
