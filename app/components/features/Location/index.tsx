import { Section } from "../../ui/Section";
import { Clock, MapPin, ExternalLink } from "lucide-react";
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
              <span className={styles.titleHighlight}>com a gente</span>
            </h2>
            <p className={styles.description}>
              Nossas atividades acontecem em locais cuidadosamente escolhidos pela acessibilidade e beleza natural. Toda infraestrutura é adaptada para receber você com conforto e segurança.
            </p>
            
            <div className={styles.schedulesList} role="region" aria-label="Horários das remadas adaptadas">
              <div className={`${styles.scheduleCard} ${styles.scheduleCardSunday}`}>
                <div className={`${styles.scheduleIconWrapper} ${styles.iconSunday}`} aria-hidden="true">
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className={styles.cardTitle}>Domingos</h3>
                  <p className={`${styles.scheduleTime} ${styles.timeSunday}`}>Aos domingos, quinzenalmente, das 09h às 11h</p>
                  <p className={styles.scheduleAddress}>
                    <MapPin aria-hidden="true" size={16} className="inline mr-1" />
                    <span>Praia de Charitas, Niterói – RJ (Quiosque 19 - Point do Remador)</span>
                  </p>
                </div>
              </div>
            </div>

            <div className={styles.registrationAlert} role="note" aria-label="Aviso de inscrição">
              <p><strong>Inscrição obrigatória.</strong> As vagas são limitadas para garantir a segurança de todos. Entre em contato para se inscrever gratuitamente.</p>
            </div>

            <a
              href="https://maps.google.com/?q=Praia+de+Charitas+Niteroi+Quiosque+19+Point+do+Remador"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.mapExternalLink}
              aria-label="Abrir localização da Praia de Charitas no Google Maps (abre em nova aba)"
            >
              <ExternalLink size={16} aria-hidden="true" />
              <span>Abrir rota no Google Maps</span>
            </a>
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
              title="Mapa de localização da Praia de Charitas, Quiosque 19 - Point do Remador em Niterói, RJ"
            ></iframe>
          </div>
        </div>
      </div>
    </Section>
  );
}
