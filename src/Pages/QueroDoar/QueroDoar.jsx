import s from "./QueroDoar.module.scss";
import iconeLivro from "../../assets/img/Frame.png";

export default function QueroDoar() {
  return (
    <section className={s.queroDoar}>
      <h2>
        Por favor, preencha o formulário com suas informações e as informações
        do Livro
      </h2>
      <form>
        <div className={s.infoLivro}>
          <img src={iconeLivro} alt="ícone de livro" />
          <h3>Informações do Livro</h3>
        </div>

        <div className={s.inputGroup}>
          <input type="text" name="" id="" placeholder="Título" />

          <input type="text" name="" id="" placeholder="Categoria" />

          <input type="text" name="" id="" placeholder="Autor" />

          <input type="text" name="" id="" placeholder="Link da Imagem" />
        </div>
        <div className={s.btn}>
          <button type="submit">Doar</button>
        </div>
      </form>
    </section>
  );
}
