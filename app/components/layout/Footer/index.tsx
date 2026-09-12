import { Link } from "react-router";
import styles from "./styles.module.css";
import logoImg from "../../../assets/logo.png";
import { Button } from "../../ui/Button";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.brandCol}>
            <Link to="/" className={styles.logoLink}>
              <img src={logoImg} alt="Logotipo PCD em Movimento" className="h-10 w-auto" />
            </Link>
            <p className={styles.description}>
              Promovendo inclusão, mobilidade e integração social de pessoas com deficiência por meio da prática da canoa havaiana adaptada.
            </p>
            <div className={styles.socials}>
              <a href="#" aria-label="Instagram" className={styles.socialIcon}>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" aria-label="Facebook" className={styles.socialIcon}>
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Links Rápidos</h4>
            <ul className={styles.linkList}>
              <li><a href="/#inicio">Início</a></li>
              <li><a href="/#quem-somos">Quem Somos</a></li>
              <li><a href="/#projeto">O Projeto</a></li>
              <li><a href="/#participar">Como Participar</a></li>
              <li><a href="/#contato">Contato</a></li>
            </ul>
          </div>

          <div className={styles.ctaCol}>
            <h4 className={styles.colTitle}>Participe</h4>
            <p className={styles.ctaText}>Junte-se a nós e faça parte de uma comunidade que transforma vidas.</p>
            <a href="/#seja-voluntario">
              <Button variant="success" fullWidth>Seja Voluntário</Button>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
