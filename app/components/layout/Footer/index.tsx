import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router";
import styles from "./styles.module.css";
import logoImg from "../../../assets/logo.png";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.column}>
            <Link to="/" className={styles.logoLink}>
              <img src={logoImg} alt="Logotipo PCD em Movimento" className="h-12 w-auto" />
            </Link>
            <p className={styles.description}>
              Promovendo inclusão, mobilidade e integração social de pessoas com deficiência através da prática de canoa havaiana.
            </p>
          </div>

          <div className={styles.column}>
            <h3 className={styles.title}>Links Rápidos</h3>
            <ul className={styles.linkList}>
              <li><a href="/#inicio" className={styles.linkItem}>Início</a></li>
              <li><a href="/#quem-somos" className={styles.linkItem}>Quem Somos</a></li>
              <li><a href="/#projeto" className={styles.linkItem}>O Projeto</a></li>
              <li><a href="/#depoimentos" className={styles.linkItem}>Depoimentos</a></li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.title}>Contato</h3>
            <ul className={styles.contactList}>
              <li className={styles.contactItemStart}>
                <MapPin className={styles.iconTop} size={20} aria-hidden="true" />
                <span>Base do Projeto, Praia de Copacabana<br/>Rio de Janeiro, RJ</span>
              </li>
              <li className={styles.contactItem}>
                <Phone className={styles.icon} size={20} aria-hidden="true" />
                <span>(21) 99999-9999</span>
              </li>
              <li className={styles.contactItem}>
                <Mail className={styles.icon} size={20} aria-hidden="true" />
                <span>contato@pcdemmovimento.org.br</span>
              </li>
            </ul>
          </div>

          <div className={styles.column}>
            <h3 className={styles.title}>Faça Parte</h3>
            <a href="/#seja-voluntario" className={styles.ctaButton}>
              Seja Voluntário
            </a>
            
            <h3 className={styles.socialTitle}>Redes Sociais</h3>
            <div className={styles.socialGroup}>
              <a href="#" className={styles.socialIcon} aria-label="Siga-nos no Instagram">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a href="#" className={styles.socialIcon} aria-label="Curta nossa página no Facebook">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>
        </div>

        <div className={styles.legal}>
          <p>© {new Date().getFullYear()} PCD em Movimento. Todos os direitos reservados.</p>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.linkItem}>Política de Privacidade</a>
            <a href="#" className={styles.linkItem}>Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
