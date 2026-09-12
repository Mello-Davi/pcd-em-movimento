import { Section } from "../../ui/Section";
import { Clock, MapPin } from "lucide-react";
import styles from "./styles.module.css";

export function Location() {
  return (
    <Section theme="white">
      <div className={styles.container}>
        <div className={styles.locationLayout}>
          <div className={styles.locationInfo}>
            <span className={styles.tag}>Onde Acontece</span>
            <h2 className={styles.title}>
              Venha remar <br/>
              <span className="text-brand-green">com a gente</span>
            </h2>
            <p className={styles.description}>
              Nossas atividades acontecem em locais cuidadosamente escolhidos pela acessibilidade e beleza natural. Toda infraestrutura é adaptada para receber você com conforto e segurança.
            </p>
            
            <div className={styles.schedulesList}>
              <div className={`${styles.scheduleCard} ${styles.scheduleCardSunday}`}>
                <div className={`${styles.scheduleIconWrapper} ${styles.iconSunday}`}>
                  <Clock className="text-white" aria-hidden="true" size={24} />
                </div>
                <div>
                  <h3 className={styles.cardTitle}>Domingos</h3>
                  <p className={`${styles.scheduleTime} ${styles.timeSunday}`}>08:00 – 11:00h</p>
                  <p className={styles.scheduleAddress}>
                    <MapPin aria-hidden="true" size={16} className="inline mr-1" />
                    Praia Grande – SP (1º domingo do mês)
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.registrationAlert}>
              <p><strong>Inscrição obrigatória.</strong> As vagas são limitadas para garantir a segurança de todos. Entre em contato para se inscrever gratuitamente.</p>
            </div>
          </div>

          <div className={styles.mapContainer}>
            <div className={styles.mapOverlay}>
              <h3 className={styles.mapTitle}>Represa de Guarapiranga</h3>
              <p className={styles.mapSubtitle}>São Paulo – SP</p>
              <a href="#" className={styles.mapLink}>Ver no Google Maps</a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
