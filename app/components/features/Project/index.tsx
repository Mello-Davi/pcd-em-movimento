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

        <div className={styles.disabilitiesList}>
          <div className={styles.disabilityCard}>
            <div className={`${styles.disabilityIconWrapper} ${styles.iconVisual}`}>
              <Eye className="text-blue-600" aria-hidden="true" size={28} />
            </div>
            <h3 className={styles.disabilityTitle}>Deficiência Visual</h3>
            <p className={styles.disabilityDescription}>
              Navegamos com guias visuais e comunicação verbal constante, garantindo segurança e autonomia total no barco.
            </p>
          </div>

          <div className={styles.disabilityCard}>
            <div className={`${styles.disabilityIconWrapper} ${styles.iconAuditory}`}>
              <Ear className="text-green-700" aria-hidden="true" size={28} />
            </div>
            <h3 className={styles.disabilityTitle}>Deficiência Auditiva</h3>
            <p className={styles.disabilityDescription}>
              Utilizamos sinais visuais, língua de sinais e comunicação visual para integração plena na remada.
            </p>
          </div>

          <div className={styles.disabilityCard}>
            <div className={`${styles.disabilityIconWrapper} ${styles.iconMobility}`}>
              <Accessibility className="text-blue-800" aria-hidden="true" size={28} />
            </div>
            <h3 className={styles.disabilityTitle}>Cadeirantes</h3>
            <p className={styles.disabilityDescription}>
              Canoas adaptadas com suporte especializado para embarque, encaixes e remada segura na água.
            </p>
          </div>
        </div>
      </div>
    </Section>
  );
}
