import { Activity, Anchor, Sun } from "lucide-react";
import { Section } from "../../ui/Section";
import { SectionTitle } from "../../ui/SectionTitle";
import styles from "./styles.module.css";

export function Project() {
  return (
    <Section id="projeto" theme="light">
      <div className={styles.container}>
        <div className={styles.textContent}>
          <SectionTitle>O Projeto: Canoa Havaiana</SectionTitle>
          <p className={styles.description}>
            A Canoa Havaiana (Va'a) é um esporte que exige trabalho em equipe, sincronia e respeito. 
            Nosso projeto adapta as embarcações e a metodologia de ensino para atender pessoas com diferentes 
            tipos de deficiência, promovendo autonomia e socialização.
          </p>
          
          <ul className={styles.benefitsList}>
            <li className={styles.benefitItem}>
              <div className={styles.iconWrapper}>
                <Activity size={24} aria-hidden="true" />
              </div>
              <div>
                <h4 className={styles.benefitTitle}>Saúde e Reabilitação</h4>
                <p className={styles.benefitText}>O remo fortalece a musculatura, melhora a capacidade cardiorrespiratória e a coordenação motora.</p>
              </div>
            </li>
            <li className={styles.benefitItem}>
              <div className={styles.iconWrapper}>
                <Anchor size={24} aria-hidden="true" />
              </div>
              <div>
                <h4 className={styles.benefitTitle}>Inclusão Total</h4>
                <p className={styles.benefitText}>Atendemos pessoas com deficiência visual, auditiva, cadeirantes e deficiências intelectuais, adaptando a experiência para cada necessidade.</p>
              </div>
            </li>
            <li className={styles.benefitItem}>
              <div className={styles.iconWrapper}>
                <Sun size={24} aria-hidden="true" />
              </div>
              <div>
                <h4 className={styles.benefitTitle}>Socialização e Natureza</h4>
                <p className={styles.benefitText}>O contato com o mar e o trabalho em equipe na canoa promovem laços de amizade e bem-estar emocional.</p>
              </div>
            </li>
          </ul>
        </div>
        
        <div className={styles.imageGrid}>
          <img 
            src="https://images.unsplash.com/photo-1596489370217-1033b006c9bc?q=80&w=1000&auto=format&fit=crop" 
            alt="Canoa havaiana no mar aberto" 
            className={styles.imageLeft}
          />
          <img 
            src="https://images.unsplash.com/photo-1544079867-b50a0063d810?q=80&w=1000&auto=format&fit=crop" 
            alt="Equipe remando junta na canoa" 
            className={styles.imageRight}
          />
        </div>
      </div>
    </Section>
  );
}
