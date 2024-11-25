import s from "./footer.module.scss";
import Facebook from "../../assets/img/facebook.png";
import Twitter from "../../assets/img/Twitter.png";
import YouTube from "../../assets/img/youtube.png";
import Linkedin from "../../assets/img/linkedin.png";
import Instagram from "../../assets/img/instagram.png";

export default function Footer() {
  return (
    <footer>
      <section className={s.boxSocial}>
        <h3>4002-8922</h3>
        <nav>
          <a href="https://www.facebook.com/vainaweb/">
            <img src={Facebook} alt="icone do facebook" />
          </a>
          <a href="https://x.com/vainaweb/">
            <img src={Twitter} alt="icone do Twitter" />
          </a>
          <a href="https://www.youtube.com/c/VaiNaWeb">
            <img src={YouTube} alt="icone do YouTube" />
          </a>
          <a href="https://www.linkedin.com/company/vainaweb/">
            <img src={Linkedin} alt="icone do Linkedin" />
          </a>
          <a href="https://www.instagram.com/vainaweb/">
            <img src={Instagram} alt="icone do Instagram" />
          </a>
        </nav>
      </section>

      <section className={s.boxCredits}>
        <p>Layout desenvolvido pela Vai Na Web para fins educativos - 2024 </p>
      </section>
    </footer>
  );
}
