import { Section } from "../../ui/Section";
import { SectionTitle } from "../../ui/SectionTitle";
import { Heart, Users, Waves } from "lucide-react";
import styles from "./styles.module.css";

export function About() {
  return (
    <Section id="quem-somos" theme="white">
      <div className={styles.container}>
        <div className={styles.aboutLayout}>
          
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
          
          <div className={styles.valuesList}>
            <div className={`${styles.valueCard} ${styles.valueCardAcolhimento}`}>
              <div className={styles.valueIconWrapper}>
                <Heart aria-hidden="true" size={24} className="text-white" />
              </div>
              <div>
                <h3 className={styles.valueTitle}>Acolhimento</h3>
                <p className={styles.valueDescription}>Cada pessoa é recebida com dignidade e respeito, sem barreiras.</p>
              </div>
            </div>
            
            <div className={`${styles.valueCard} ${styles.valueCardInclusao}`}>
              <div className={styles.valueIconWrapper}>
                <Users aria-hidden="true" size={24} className="text-white" />
              </div>
              <div>
                <h3 className={styles.valueTitle}>Inclusão</h3>
                <p className={styles.valueDescription}>Promovemos a participação plena de pessoas com diferentes deficiências.</p>
              </div>
            </div>
            
            <div className={`${styles.valueCard} ${styles.valueCardMovimento}`}>
              <div className={styles.valueIconWrapper}>
                <Waves aria-hidden="true" size={24} className="text-white" />
              </div>
              <div>
                <h3 className={styles.valueTitle}>Movimento</h3>
                <p className={styles.valueDescription}>A canoa havaiana como veículo de liberdade, superação e alegria.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.institutionalList}>
          <div className={styles.institutionalCard}>
            <h4 className={styles.infoTitle}>MISSÃO</h4>
            <p className={styles.infoText}>Promover inclusão e bem-estar de PCDs através da canoa havaiana.</p>
          </div>
          <div className={styles.institutionalCard}>
            <h4 className={styles.infoTitle}>VISÃO</h4>
            <p className={styles.infoText}>Um Brasil onde pessoas com deficiência vivem e praticam esporte sem barreiras.</p>
          </div>
          <div className={styles.institutionalCard}>
            <h4 className={styles.infoTitle}>VALORES</h4>
            <p className={styles.infoText}>Respeito, acolhimento, inclusão, superação e comunidade.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
