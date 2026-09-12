import { Section } from "../../ui/Section";
import { Clock, MapPin } from "lucide-react";
import styles from "./styles.module.css";

export function Location() {
  return (
    <Section theme="white">
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.content}>
            <span className={styles.tag}>Onde Acontece</span>
            <h2 className={styles.title}>
              Venha remar <br/>
              <span className="text-brand-green">com a gente</span>
            </h2>
            <p className={styles.description}>
              Nossas atividades acontecem em locais cuidadosamente escolhidos pela acessibilidade e beleza natural. Toda infraestrutura é adaptada para receber você com conforto e segurança.
            </p>
            
            <div className={styles.cardsList}>
              <div className={styles.locationCard}>
                <div className={styles.iconWrapperBlue}>
                  <Clock className="text-white" aria-hidden="true" size={24} />
                </div>
                <div>
                  <h3 className={styles.cardTitle}>Sábados</h3>
                  <p className={styles.time}>07:00 – 10:00h</p>
                  <p className={styles.address}>
                    <MapPin aria-hidden="true" size={16} className="inline mr-1" />
                    Represa de Guarapiranga, São Paulo
                  </p>
                </div>
              </div>

              <div className={styles.locationCardGreen}>
                <div className={styles.iconWrapperGreen}>
                  <Clock className="text-white" aria-hidden="true" size={24} />
                </div>
                <div>
                  <h3 className={styles.cardTitle}>Domingos</h3>
                  <p className={styles.timeGreen}>08:00 – 11:00h</p>
                  <p className={styles.addressGreen}>
                    <MapPin aria-hidden="true" size={16} className="inline mr-1" />
                    Praia Grande – SP (1º domingo do mês)
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.alert}>
              <p><strong>Inscrição obrigatória.</strong> As vagas são limitadas para garantir a segurança de todos. Entre em contato para se inscrever gratuitamente.</p>
            </div>
          </div>

          <div className={styles.mapContainer}>
            <div className={styles.mapOverlay}>
              <h3 className={styles.mapTitle}>Represa de Guarapiranga</h3>
              <p className={styles.mapSubtitle}>São Paulo – SP</p>
              <a href="#" className={styles.mapButton}>Ver no Google Maps</a>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
