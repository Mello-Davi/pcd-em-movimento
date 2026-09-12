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
                <Heart aria-hidden="true" size={24} className="text-white" />
              </div>
              <div>
                <h3 className={styles.cardTitleWhite}>Acolhimento</h3>
                <p className={styles.cardTextWhite}>Cada pessoa é recebida com dignidade e respeito, sem barreiras.</p>
              </div>
            </div>
            
            <div className={styles.cardBlue}>
              <div className={styles.iconWrapperBlue}>
                <Users aria-hidden="true" size={24} className="text-white" />
              </div>
              <div>
                <h3 className={styles.cardTitleWhite}>Inclusão</h3>
                <p className={styles.cardTextWhite}>Promovemos a participação plena de pessoas com diferentes deficiências.</p>
              </div>
            </div>
            
            <div className={styles.cardGreen}>
              <div className={styles.iconWrapperGreen}>
                <Waves aria-hidden="true" size={24} className="text-white" />
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
