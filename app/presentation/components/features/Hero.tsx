import React from "react";
import { Button } from "../ui/Button";

const heroStyles = {
  section: "relative w-full h-[80vh] min-h-[600px] flex items-center justify-center bg-blue-900 overflow-hidden",
  backgroundOverlay: "absolute inset-0 bg-blue-900/70 mix-blend-multiply z-10",
  backgroundImage: "w-full h-full object-cover",
  contentContainer: "container relative z-10 mx-auto px-4 text-center",
  title: "text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg leading-tight max-w-4xl mx-auto",
  subtitle: "text-xl md:text-2xl text-blue-50 mb-10 max-w-2xl mx-auto drop-shadow-md",
  actionsContainer: "flex flex-col sm:flex-row items-center justify-center gap-4"
};

export function Hero() {
  return (
    <section id="inicio" className={heroStyles.section}>
      <div className="absolute inset-0 z-0">
        <div className={heroStyles.backgroundOverlay} />
        <img
          src="https://images.unsplash.com/photo-1544079867-b50a0063d810?q=80&w=2070&auto=format&fit=crop"
          alt="Pessoas praticando canoa havaiana no mar ao entardecer"
          className={heroStyles.backgroundImage}
        />
      </div>

      <div className={heroStyles.contentContainer}>
        <h1 className={heroStyles.title}>
          Movimento que transforma vidas
        </h1>
        <p className={heroStyles.subtitle}>
          Promovendo inclusão, autonomia e qualidade de vida para pessoas com deficiência através do esporte e contato com a natureza.
        </p>
        
        <div className={heroStyles.actionsContainer}>
          <a href="/#projeto" className="w-full sm:w-auto">
            <Button variant="secondary" fullWidth>Conheça o Projeto</Button>
          </a>
          <a href="/#seja-voluntario" className="w-full sm:w-auto">
            <Button variant="success" fullWidth>Seja Voluntário</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
