import s from "./Inicio.module.scss";
import icone1 from "../../assets/img/community.png";
import icone2 from "../../assets/img/reading.png";
import icone3 from "../../assets/img/transform.png";
import icone4 from "../../assets/img/balance.png";

export default function Inicio() {
  return(
    <main>
      <section className={s.banner}>
        <h2>VENHA FAZER PARTE DA MAIOR REDE DE DOAÇÃO</h2>
      </section>

      <section className={s.devoDoar}>
        <div>
          <h2>Por que devo doar?</h2>
        </div>
    <section className={s.boxCard}>
          <article>
            <img src={icone1} alt="Ícone de inclusão social" />
            <p>
              Oferece livros a quem não tem acesso, ajudando a reduzir a
              exclusão social.
            </p>
          </article>
          <article>
            <img src={icone2} alt="Ícone de aprendizado" />
            <p>Estimula o hábito da leitura e o aprendizado contínuo.</p>
          </article>
          <article>
            <img src={icone3} alt="Ícone de transformação" />
            <p>
              Fornece conhecimento e inspiração, permitindo que indivíduos
              transformem suas vidas.
            </p>
          </article>
          <article>
            <img src={icone4} alt="Ícone de oportunidades" />
            <p>
              Garante que todos, independentemente de sua condição, tenham
              oportunidades de aprendizado
            </p>
          </article>
        </section>
      </section>
    </main>
  );
}
