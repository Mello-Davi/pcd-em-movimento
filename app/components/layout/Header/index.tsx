import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";
import styles from "./styles.module.css";
import logoImg from "../../../assets/logo.png";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Início", href: "/#inicio" },
    { name: "Quem Somos", href: "/#quem-somos" },
    { name: "Projeto", href: "/#projeto" },
    { name: "Como Participar", href: "/#participar" },
    { name: "Contato", href: "/#contato" },
  ];

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link to="/" className={styles.logoLink} aria-label="Página inicial do PCD em Movimento">
          <img src={logoImg} alt="Logotipo PCD em Movimento" className="h-10 w-auto" />
        </Link>

        <nav className={styles.desktopNav} aria-label="Navegação principal">
          <ul className={styles.navList}>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a href={link.href} className={styles.navLink}>{link.name}</a>
              </li>
            ))}
          </ul>
          <a href="/#seja-voluntario" className={styles.ctaButton} aria-label="Seja um voluntário do projeto">
            Seja Voluntário
          </a>
        </nav>

        <button
          className={styles.mobileMenuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X aria-hidden="true" size={28} /> : <Menu aria-hidden="true" size={28} />}
        </button>
      </div>

      {isMenuOpen && (
        <div className={styles.mobileNav}>
          <nav aria-label="Navegação mobile">
            <ul className={styles.mobileNavList}>
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href} className={styles.mobileNavLink} onClick={() => setIsMenuOpen(false)}>
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a href="/#seja-voluntario" className={styles.mobileCtaButton} onClick={() => setIsMenuOpen(false)}>
                  Seja Voluntário
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
