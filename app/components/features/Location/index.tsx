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
                    Praia de Charitas, Niterói – RJ (Quiosque 19 - Point do Remador)
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.registrationAlert}>
              <p><strong>Inscrição obrigatória.</strong> As vagas são limitadas para garantir a segurança de todos. Entre em contato para se inscrever gratuitamente.</p>
            </div>
          </div>

          <div className={styles.mapContainer}>
            <iframe 
              src="https://maps.google.com/maps?q=Praia%20de%20Charitas,%20Niter%C3%B3i,%20quiosque%2019%20Point%20do%20Remador&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa para Praia de Charitas, Quiosque 19 - Point do Remador"
            ></iframe>
          </div>
        </div>
      </div>
    </Section>
  );
}
