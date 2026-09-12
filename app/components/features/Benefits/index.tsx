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
        <div className={styles.grid}>
          <div className={styles.content}>
            <h2 className={styles.title}>Benefícios comprovados</h2>
            <ul className={styles.list}>
              {benefits.map((benefit, idx) => (
                <li key={idx} className={styles.listItem}>
                  <CheckCircle2 className={styles.icon} size={24} />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
          
          <div className={styles.imageContainer}>
            <img src={canoaImg} alt="Canoa no mar" className={styles.image} />
            <div className={styles.imageOverlay}>
              <p className={styles.quote}>"O mar não tem barreiras."</p>
              <p className={styles.quoteAuthor}>Equipe PCD em Movimento</p>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
