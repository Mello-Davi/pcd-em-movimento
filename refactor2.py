import os

def write_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w') as f:
        f.write(content.strip() + "\n")

# --- HEADER ---
write_file("app/components/layout/Header/index.tsx", """
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
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
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
""")

write_file("app/components/layout/Header/styles.module.css", """
@reference "tailwindcss";

.header { @apply sticky top-0 z-50 w-full bg-brand-dark border-b border-white/10 shadow-md; }
.container { @apply container mx-auto px-4 h-20 flex items-center justify-between; }
.logoLink { @apply flex items-center focus:outline-none focus:ring-2 focus:ring-white rounded p-1; }
.desktopNav { @apply hidden lg:flex items-center gap-6 lg:gap-8; }
.navList { @apply flex items-center gap-6; }
.navLink { @apply text-gray-200 hover:text-white font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-white rounded-md px-2 py-1 text-sm; }
.ctaButton { @apply bg-brand-green hover:bg-green-600 text-white font-semibold py-2 px-5 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green text-sm; }
.mobileMenuButton { @apply lg:hidden p-2 text-white focus:outline-none focus:ring-2 focus:ring-white rounded-md; }
.mobileNav { @apply lg:hidden bg-brand-dark border-t border-white/10 px-4 py-4 shadow-lg absolute w-full left-0; }
.mobileNavList { @apply flex flex-col gap-4; }
.mobileNavLink { @apply block text-white text-lg font-medium hover:text-gray-300 focus:outline-none focus:ring-2 focus:ring-white rounded-md px-2 py-1; }
.mobileCtaButton { @apply block w-full text-center bg-brand-green hover:bg-green-600 text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-brand-green; }
""")

# --- HERO ---
write_file("app/components/features/Hero/index.tsx", """
import React from "react";
import { Button } from "../../ui/Button";
import styles from "./styles.module.css";
import heroImg from "../../../assets/canoaHavaianaMarAberto.png";

export function Hero() {
  return (
    <section id="inicio" className={styles.section}>
      <div className={styles.backgroundWrapper}>
        <img
          src={heroImg}
          alt="Pessoas praticando canoa havaiana no mar ao entardecer"
          className={styles.backgroundImage}
        />
        <div className={styles.backgroundOverlay} />
      </div>

      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.tag}>
            <span className={styles.tagIcon}>≈</span>
            Canoa Havaiana Adaptada • Inclusão Social
          </div>
          
          <h1 className={styles.title}>
            Movimento que <br className="hidden md:block" />
            <span className={styles.highlight}>transforma</span> vidas
          </h1>
          
          <p className={styles.subtitle}>
            A PCD em Movimento leva pessoas com deficiência ao oceano através da canoa havaiana adaptada — promovendo inclusão, saúde e conexão humana.
          </p>
          
          <div className={styles.actions}>
            <a href="/#projeto" className={styles.linkWrapper}>
              <Button variant="secondary" fullWidth>Conheça o Projeto</Button>
            </a>
            <a href="/#seja-voluntario" className={styles.linkWrapper}>
              <Button variant="success" fullWidth>Seja Voluntário</Button>
            </a>
          </div>
        </div>

        <div className={styles.statsContainer}>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>200+</span>
            <span className={styles.statLabel}>Participantes atendidos</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>5 anos</span>
            <span className={styles.statLabel}>Transformando vidas</span>
          </div>
          <div className={styles.statItem}>
            <span className={styles.statNumber}>3</span>
            <span className={styles.statLabel}>Tipos de deficiência</span>
          </div>
        </div>
      </div>
      
      {/* Wavy bottom divider */}
      <div className={styles.waveDivider}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
""")

write_file("app/components/features/Hero/styles.module.css", """
@reference "tailwindcss";

.section { @apply relative min-h-[90vh] flex items-center pt-20 pb-32; }
.backgroundWrapper { @apply absolute inset-0 z-0 overflow-hidden bg-brand-dark; }
.backgroundImage { @apply w-full h-full object-cover object-center opacity-60 mix-blend-overlay; }
.backgroundOverlay { @apply absolute inset-0 bg-gradient-to-r from-brand-dark/90 via-brand-dark/70 to-transparent; }

.container { @apply container mx-auto px-4 relative z-10 flex flex-col justify-between h-full; }
.content { @apply max-w-3xl pt-10; }

.tag { @apply inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/20 bg-white/10 text-white text-sm font-medium mb-8 backdrop-blur-sm; }
.tagIcon { @apply text-brand-green font-bold text-lg; }

.title { @apply font-serif text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight mb-6; }
.highlight { @apply text-brand-green; }

.subtitle { @apply text-lg md:text-xl text-gray-200 leading-relaxed mb-10 max-w-2xl; }

.actions { @apply flex flex-col sm:flex-row gap-4 mb-20; }
.linkWrapper { @apply w-full sm:w-auto; }

.statsContainer { @apply flex flex-wrap gap-10 md:gap-20 pb-10 border-t border-white/10 pt-10 mt-auto; }
.statItem { @apply flex flex-col gap-1; }
.statNumber { @apply font-serif text-4xl font-bold text-white; }
.statLabel { @apply text-blue-200 text-sm md:text-base font-medium; }

.waveDivider { @apply absolute bottom-0 left-0 w-full h-12 md:h-20 lg:h-28 z-20 overflow-hidden; }
""")

# --- ABOUT ---
write_file("app/components/features/About/index.tsx", """
import { Section } from "../../ui/Section";
import { SectionTitle } from "../../ui/SectionTitle";
import { Heart, Users, Waves } from "lucide-react";
import styles from "./styles.module.css";

export function About() {
  return (
    <Section id="quem-somos" theme="white">
      <div className={styles.container}>
        <div className={styles.grid}>
          
          <div className={styles.textContent}>
            <SectionTitle 
              tag="Quem Somos" 
              title={
                <>
                  Nascemos do oceano,<br/>
                  <span className="text-blue-600">crescemos na</span><br/>
                  <span className="text-blue-600">comunidade</span>
                </>
              } 
            />
            
            <div className={styles.prose}>
              <p>
                A <strong>PCD em Movimento</strong> é uma organização sem fins lucrativos fundada em 2019 em São Paulo, dedicada à inclusão social de pessoas com deficiência por meio do esporte adaptado.
              </p>
              <p>
                Nossa prática central — a canoa havaiana adaptada — une saúde física, saúde mental, socialização e contato com a natureza em uma experiência transformadora. Acreditamos que o mar não tem barreiras, e ninguém deveria ter.
              </p>
            </div>
          </div>
          
          <div className={styles.cardsColumn}>
            <div className={styles.cardDark}>
              <div className={styles.iconWrapperDark}>
                <Heart size={24} className="text-white" />
              </div>
              <div>
                <h3 className={styles.cardTitleWhite}>Acolhimento</h3>
                <p className={styles.cardTextWhite}>Cada pessoa é recebida com dignidade e respeito, sem barreiras.</p>
              </div>
            </div>
            
            <div className={styles.cardBlue}>
              <div className={styles.iconWrapperBlue}>
                <Users size={24} className="text-white" />
              </div>
              <div>
                <h3 className={styles.cardTitleWhite}>Inclusão</h3>
                <p className={styles.cardTextWhite}>Promovemos a participação plena de pessoas com diferentes deficiências.</p>
              </div>
            </div>
            
            <div className={styles.cardGreen}>
              <div className={styles.iconWrapperGreen}>
                <Waves size={24} className="text-white" />
              </div>
              <div>
                <h3 className={styles.cardTitleWhite}>Movimento</h3>
                <p className={styles.cardTextWhite}>A canoa havaiana como veículo de liberdade, superação e alegria.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.bottomCards}>
          <div className={styles.infoCard}>
            <h4 className={styles.infoTitle}>MISSÃO</h4>
            <p className={styles.infoText}>Promover inclusão e bem-estar de PCDs através da canoa havaiana.</p>
          </div>
          <div className={styles.infoCard}>
            <h4 className={styles.infoTitle}>VISÃO</h4>
            <p className={styles.infoText}>Um Brasil onde pessoas com deficiência vivem e praticam esporte sem barreiras.</p>
          </div>
          <div className={styles.infoCard}>
            <h4 className={styles.infoTitle}>VALORES</h4>
            <p className={styles.infoText}>Respeito, acolhimento, inclusão, superação e comunidade.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
""")

write_file("app/components/features/About/styles.module.css", """
@reference "tailwindcss";

.container { @apply container mx-auto px-4; }
.grid { @apply grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mb-16; }

.textContent { @apply flex flex-col; }
.prose { @apply text-gray-700 text-lg leading-relaxed flex flex-col gap-6; }

.cardsColumn { @apply flex flex-col gap-4; }

.cardDark { @apply bg-brand-dark rounded-xl p-6 flex items-start gap-5 shadow-lg; }
.iconWrapperDark { @apply bg-white/20 p-3 rounded-lg shrink-0; }

.cardBlue { @apply bg-[#1e5896] rounded-xl p-6 flex items-start gap-5 shadow-lg; }
.iconWrapperBlue { @apply bg-white/20 p-3 rounded-lg shrink-0; }

.cardGreen { @apply bg-brand-green rounded-xl p-6 flex items-start gap-5 shadow-lg; }
.iconWrapperGreen { @apply bg-white/20 p-3 rounded-lg shrink-0; }

.cardTitleWhite { @apply font-serif text-xl font-bold text-white mb-2; }
.cardTextWhite { @apply text-white/90 leading-relaxed text-sm; }

.bottomCards { @apply grid grid-cols-1 md:grid-cols-3 gap-6; }
.infoCard { @apply bg-brand-light border border-blue-100 rounded-xl p-6; }
.infoTitle { @apply font-bold text-blue-900 text-sm tracking-widest uppercase mb-3; }
.infoText { @apply text-gray-700 text-sm leading-relaxed; }
""")

