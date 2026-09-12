import React from "react";
import { Button } from "../../ui/Button";
import styles from "./styles.module.css";

export function Hero() {
  return (
    <section id="inicio" className={styles.section}>
      <div className="absolute inset-0 z-0">
        <div className={styles.backgroundOverlay} />
        <img
          src="https://images.unsplash.com/photo-1544079867-b50a0063d810?q=80&w=2070&auto=format&fit=crop"
          alt="Pessoas praticando canoa havaiana no mar ao entardecer"
          className={styles.backgroundImage}
        />
      </div>

      <div className={styles.contentContainer}>
        <h1 className={styles.title}>
          Movimento que transforma vidas
        </h1>
        <p className={styles.subtitle}>
          Promovendo inclusão, autonomia e qualidade de vida para pessoas com deficiência através do esporte e contato com a natureza.
        </p>
        
        <div className={styles.actionsContainer}>
          <a href="/#projeto" className={styles.linkWrapper}>
            <Button variant="secondary" fullWidth>Conheça o Projeto</Button>
          </a>
          <a href="/#seja-voluntario" className={styles.linkWrapper}>
            <Button variant="success" fullWidth>Seja Voluntário</Button>
          </a>
        </div>
      </div>
    </section>
  );
}
