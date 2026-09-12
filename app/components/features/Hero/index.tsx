import React from "react";
import { Button } from "../../ui/Button";
import styles from "./styles.module.css";
import heroImg from "../../../assets/canoaHavaianaMarAberto.png";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export function Hero() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="inicio" className={styles.section} aria-label="Início">
      <div className={styles.backgroundWrapper} aria-hidden="true">
        <img
          src={heroImg}
          alt=""
          className={styles.backgroundImage}
        />
        <div className={styles.backgroundOverlay} />
      </div>

      <div 
        ref={ref as React.RefObject<HTMLDivElement>} 
        className={`${styles.container} reveal ${isVisible ? "visible" : ""}`}
      >
        <div className={styles.content}>
          <div className={styles.tag}>
            <span className={styles.tagIcon} aria-hidden="true">≈</span>
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
            <a href="/#projeto" className={styles.linkWrapper} aria-label="Role a página para conhecer o projeto">
              <Button variant="secondary" fullWidth>Conheça o Projeto</Button>
            </a>
            <a href="/#seja-voluntario" className={styles.linkWrapper} aria-label="Role a página para se inscrever como voluntário">
              <Button variant="success" fullWidth>Seja Voluntário</Button>
            </a>
          </div>
        </div>

        <div className={styles.statsContainer} aria-label="Estatísticas do projeto">
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
      <div className={styles.waveDivider} aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="#ffffff" />
        </svg>
      </div>
    </section>
  );
}
