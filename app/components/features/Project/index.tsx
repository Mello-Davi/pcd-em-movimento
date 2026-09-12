import { Section } from "../../ui/Section";
import { SectionTitle } from "../../ui/SectionTitle";
import { Eye, Ear, Accessibility } from "lucide-react";
import styles from "./styles.module.css";

export function Project() {
  return (
    <Section id="projeto" theme="light">
      <div className={styles.container}>
        <SectionTitle 
          tag="O Projeto" 
          title={
            <>
              A canoa como instrumento<br/>
              <span className="text-blue-500">de transformação</span>
            </>
          }
          align="center"
        />
        
        <p className={styles.subtitle}>
          A canoa havaiana adaptada é praticada em grupos de até 6 pessoas, com instrutores certificados e voluntários treinados para apoiar cada tipo de deficiência com segurança e respeito.
        </p>

        <div className={styles.grid}>
          <div className={styles.card}>
            <div className={styles.iconWrapperBlue}>
              <Eye className="text-blue-600" aria-hidden="true" size={28} />
            </div>
            <h3 className={styles.cardTitle}>Deficiência Visual</h3>
            <p className={styles.cardText}>
              Navegamos com guias visuais e comunicação verbal constante, garantindo segurança e autonomia total no barco.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapperGreen}>
              <Ear className="text-green-700" aria-hidden="true" size={28} />
            </div>
            <h3 className={styles.cardTitle}>Deficiência Auditiva</h3>
            <p className={styles.cardText}>
              Utilizamos sinais visuais, língua de sinais e comunicação visual para integração plena na remada.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapperLightBlue}>
              <Accessibility className="text-blue-800" aria-hidden="true" size={28} />
            </div>
            <h3 className={styles.cardTitle}>Cadeirantes</h3>
            <p className={styles.cardText}>
              Canoas adaptadas com suporte especializado para embarque, encaixes e remada segura na água.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
