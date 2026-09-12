import { Heart, Target, Users } from "lucide-react";
import { Section } from "../../ui/Section";
import { SectionTitle } from "../../ui/SectionTitle";
import styles from "./styles.module.css";

export function About() {
  return (
    <Section id="quem-somos" theme="white">
      <div className={styles.header}>
        <SectionTitle theme="light">Quem Somos</SectionTitle>
        <p className={styles.description}>
          A <strong>PCD em Movimento</strong> é uma organização não-governamental dedicada à inclusão, 
          mobilidade e integração social de pessoas com deficiência. Acreditamos que o esporte, 
          em especial a canoa havaiana, é uma ferramenta poderosa para a superação de limites e 
          conexão com a natureza.
        </p>
      </div>

      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <Target size={32} aria-hidden="true" />
          </div>
          <h3 className={styles.cardTitle}>Missão</h3>
          <p className={styles.cardText}>
            Promover a inclusão social e melhorar a qualidade de vida de pessoas com deficiência 
            por meio da prática esportiva adaptada.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <Heart size={32} aria-hidden="true" />
          </div>
          <h3 className={styles.cardTitle}>Visão</h3>
          <p className={styles.cardText}>
            Ser referência em projetos esportivos adaptados e criar um mundo mais igualitário, 
            onde o mar seja acessível para todos.
          </p>
        </div>

        <div className={styles.card}>
          <div className={styles.iconWrapper}>
            <Users size={32} aria-hidden="true" />
          </div>
          <h3 className={styles.cardTitle}>Valores</h3>
          <p className={styles.cardText}>
            Acolhimento, respeito à diversidade, empatia, acessibilidade, superação e amor à natureza.
          </p>
        </div>
      </div>
    </Section>
  );
}
