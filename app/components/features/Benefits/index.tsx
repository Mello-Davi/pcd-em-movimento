import { Section } from "../../ui/Section";
import { CheckCircle2 } from "lucide-react";
import styles from "./styles.module.css";
import canoaImg from "../../../assets/canoaHavaianaMarAberto.png";

export function Benefits() {
  const benefits = [
    "Fortalecimento muscular e melhora da postura",
    "Redução de ansiedade e depressão",
    "Desenvolvimento de vínculos sociais duradouros",
    "Aumento da autoestima e autoconfiança",
    "Contato terapêutico com a natureza",
    "Aprendizado de trabalho em equipe"
  ];

  return (
    <Section theme="white">
      <div className={styles.container}>
        <div className={styles.benefitsLayout}>
          <div className={styles.benefitsText}>
            <h2 className={styles.sectionTitle}>Benefícios comprovados</h2>
            <ul className={styles.benefitsList}>
              {benefits.map((benefit, idx) => (
                <li key={idx} className={styles.benefitItem}>
                  <CheckCircle2 className={styles.benefitIcon} aria-hidden="true" size={24} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={styles.mediaWrapper}>
            <img src={canoaImg} alt="Canoa havaiana adaptada navegando no mar aberto com participantes remando" className={styles.mediaImage} />
            <div className={styles.quoteOverlay}>
              <p className={styles.quoteText}>"O mar não tem barreiras."</p>
              <p className={styles.quoteAuthor}>Equipe PCD em Movimento</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
