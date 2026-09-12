import os

def write_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w') as f:
        f.write(content.strip() + "\n")

# --- FOOTER ---
write_file("app/components/layout/Footer/index.tsx", """
import { Link } from "react-router";
import { Instagram, Facebook, Youtube } from "lucide-react";
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
              <a href="#" aria-label="Instagram" className={styles.socialIcon}><Instagram size={20} /></a>
              <a href="#" aria-label="Facebook" className={styles.socialIcon}><Facebook size={20} /></a>
              <a href="#" aria-label="YouTube" className={styles.socialIcon}><Youtube size={20} /></a>
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
""")

write_file("app/components/layout/Footer/styles.module.css", """
@reference "tailwindcss";

.footer { @apply bg-brand-dark text-white pt-10 pb-16; }
.container { @apply container mx-auto px-4; }
.grid { @apply grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12; }

.brandCol { @apply lg:col-span-2 flex flex-col gap-6; }
.logoLink { @apply inline-block; }
.description { @apply text-gray-400 text-sm leading-relaxed max-w-sm; }

.socials { @apply flex gap-4 mt-2; }
.socialIcon { @apply w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-gray-300 hover:bg-brand-green hover:text-white transition-colors; }

.linksCol { @apply flex flex-col gap-6; }
.colTitle { @apply font-bold text-sm tracking-widest text-blue-300 uppercase; }
.linkList { @apply flex flex-col gap-4 text-sm text-gray-400; }
.linkList a { @apply hover:text-white transition-colors; }

.ctaCol { @apply flex flex-col gap-6; }
.ctaText { @apply text-sm text-gray-400 leading-relaxed; }
""")

# Update home.tsx to include the new components
write_file("app/routes/home.tsx", """
import type { Route } from "./+types/home";
import { Hero } from "../components/features/Hero";
import { About } from "../components/features/About";
import { Project } from "../components/features/Project";
import { Benefits } from "../components/features/Benefits";
import { Location } from "../components/features/Location";
import { Testimonials } from "../components/features/Testimonials";
import { Participate } from "../components/features/Participate";
import { Contact } from "../components/features/Contact";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "PCD em Movimento | Canoa Havaiana Adaptada" },
    { name: "description", content: "Promovendo inclusão, autonomia e qualidade de vida para pessoas com deficiência através da canoa havaiana." },
  ];
}

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <Project />
      <Benefits />
      <Location />
      <Testimonials />
      <Participate />
      <Contact />
    </>
  );
}
""")

