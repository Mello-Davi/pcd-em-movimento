import { MapPin, Clock, Calendar } from "lucide-react";
import { Section } from "../../ui/Section";
import { SectionTitle } from "../../ui/SectionTitle";
import styles from "./styles.module.css";

export function Location() {
  return (
    <Section id="onde-acontece" theme="dark">
      <div className={styles.container}>
        <div className={styles.infoWrapper}>
          <SectionTitle theme="dark">Onde Acontece</SectionTitle>
          <p className={styles.description}>
            Venha conhecer nosso projeto e sentir a energia do mar. 
            Nossa base conta com acessibilidade e equipe preparada para receber você.
          </p>
          
          <div className={styles.detailsList}>
            <div className={styles.detailItem}>
              <div className={styles.iconWrapper}>
                <MapPin size={28} className={styles.icon} aria-hidden="true" />
              </div>
              <div>
                <h4 className={styles.detailTitle}>Localização</h4>
                <p className={styles.detailText}>Posto 6, Praia de Copacabana<br />Rio de Janeiro - RJ</p>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <div className={styles.iconWrapper}>
                <Calendar size={28} className={styles.icon} aria-hidden="true" />
              </div>
              <div>
                <h4 className={styles.detailTitle}>Dias de Atividade</h4>
                <p className={styles.detailText}>Terças, Quintas e Sábados</p>
              </div>
            </div>
            
            <div className={styles.detailItem}>
              <div className={styles.iconWrapper}>
                <Clock size={28} className={styles.icon} aria-hidden="true" />
              </div>
              <div>
                <h4 className={styles.detailTitle}>Horários</h4>
                <p className={styles.detailText}>Turma 1: 07h00 - 08h30<br />Turma 2: 08h30 - 10h00</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className={styles.mapContainer}>
          <img 
            src="https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?q=80&w=1000&auto=format&fit=crop" 
            alt="Vista da praia de Copacabana" 
            className={styles.mapImage}
          />
          <div className={styles.mapOverlay}>
            <a 
              href="https://maps.google.com" 
              target="_blank" 
              rel="noreferrer"
              className={styles.mapButton}
            >
              <MapPin size={20} />
              Abrir no Google Maps
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}
