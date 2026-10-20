import Link from "next/link";
import Image from "next/image";
import styles from "./styles.module.css";
import logoImg from "../../../assets/logo.png";
import { LinkButton } from "../../ui/Button";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={styles.footer} role="contentinfo">
      <div className={styles.container}>
        <div className={styles.footerLayout}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logoLink} aria-label="Página inicial do PCD em Movimento">
              <Image
                src={logoImg}
                alt="Logotipo PCD em Movimento"
                height={40}
                width={120}
                style={{ height: "2.5rem", width: "auto" }}
              />
            </Link>
            <p className={styles.description}>
              Promovendo acessibilidade ao esporte praticado no mar por pessoas com deficiência por meio da canoa polinésia em Niterói, RJ.
            </p>
            <div className={styles.socials} role="region" aria-label="Redes sociais">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Perfil do PCD em Movimento no Instagram (abre em nova aba)"
                className={styles.socialIcon}
              >
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Página do PCD em Movimento no Facebook (abre em nova aba)"
                className={styles.socialIcon}
              >
                <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
              </a>
            </div>
          </div>

          <div className={styles.linksCol}>
            <h4 className={styles.colTitle}>Links Rápidos</h4>
            <nav aria-label="Navegação secundária no rodapé">
              <ul className={styles.linkList}>
                <li><a href="/#inicio">Início</a></li>
                <li><a href="/#quem-somos">Quem Somos</a></li>
                <li><a href="/#projeto">O Projeto</a></li>
                <li><a href="/#participar">Como Participar</a></li>
                <li><a href="/#contato">Contato</a></li>
              </ul>
            </nav>
          </div>

          <div className={styles.ctaCol}>
            <h4 className={styles.colTitle}>Participe</h4>
            <p className={styles.ctaText}>Junte-se a nós e faça parte de uma comunidade que transforma vidas.</p>
            <LinkButton href="/#seja-voluntario" variant="success" fullWidth aria-label="Inscreva-se como voluntário do projeto">
              Seja Voluntário
            </LinkButton>
          </div>
        </div>

        <div className={styles.bottomBar}>
          <p className={styles.copyright}>
            © {currentYear} Associação PCD em Movimento. Todos os direitos reservados. Projeto social sem fins lucrativos.
          </p>
        </div>
      </div>
    </footer>
  );
}
