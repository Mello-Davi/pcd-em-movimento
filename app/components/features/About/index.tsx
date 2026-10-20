import { Section } from "../../ui/Section";
import { SectionTitle } from "../../ui/SectionTitle";
import { Heart, Users, Waves } from "lucide-react";
import styles from "./styles.module.css";

export function About() {
  return (
    <Section id="quem-somos" theme="white">
      <div className={styles.container}>
        <div className={styles.aboutLayout}>
          
          <div className={styles.textContent}>
            <SectionTitle 
              tag="Quem Somos" 
              title={
                <>
                  Apaixonados por canoa polinésia e
                  <span className="text-blue-600"> movido pelo ideal</span>
                  <span className="text-blue-600"> de um mundo igualitário</span>
                </>
              } 
            />
            
            <div className={styles.prose}>
              <p>
                A <strong>Associação PCD em Movimento</strong> é uma organização sem fins lucrativos fundada oficialmente em 2025. Nossa história, no entanto, começou muito antes dessa data, nas iniciativas de um grupo apaixonado por esporte e movido pelo ideal de um mundo igualitário.
              </p>
              <p>
                Inspirada em uma tradição ancestral, a Canoagem Polinésia (ou Va'a, em sua nomenclatura original) nasceu há milhares de anos nas ilhas do Pacífico, como meio de transporte, subsistência e conexão entre povos. Hoje, o Va'a se transformou em uma prática esportiva que une técnica, trabalho em equipe e respeito à natureza, valores que se alinham perfeitamente ao nosso propósito.
              </p>
            </div>
          </div>
          
          <div className={styles.valuesList}>
            <div className={`${styles.valueCard} ${styles.valueCardAcolhimento}`}>
              <div className={styles.valueIconWrapper}>
                <Heart aria-hidden="true" size={24} className="text-white" />
              </div>
              <div>
                <h3 className={styles.valueTitle}>Acolhimento</h3>
                <p className={styles.valueDescription}>Ficamos muito felizes ao receber cada um de vocês, e com cuidado e atenção identificamos a necessidade de cada pessoa.</p>
              </div>
            </div>
            
            <div className={`${styles.valueCard} ${styles.valueCardInclusao}`}>
              <div className={styles.valueIconWrapper}>
                <Users aria-hidden="true" size={24} className="text-white" />
              </div>
              <div>
                <h3 className={styles.valueTitle}>Acessibilidade</h3>
                <p className={styles.valueDescription}>Através da canoa, eliminamos barreiras e promovemos acessibilidade ao esporte praticado no mar.</p>
              </div>
            </div>
            
            <div className={`${styles.valueCard} ${styles.valueCardMovimento}`}>
              <div className={styles.valueIconWrapper}>
                <Waves aria-hidden="true" size={24} className="text-white" />
              </div>
              <div>
                <h3 className={styles.valueTitle}>Movimento</h3>
                <p className={styles.valueDescription}>No balanço do mar, a canoa promove liberdade e estimula a autoconfiança.</p>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.institutionalList}>
          <div className={styles.institutionalCard}>
            <h3 className={styles.infoTitle}>MISSÃO</h3>
            <p className={styles.infoText}>Tornar a canoagem polinésia adaptada uma ferramenta de transformação social, desenvolvimento pessoal e fortalecimento da autoestima, desinstitucionalizando a pessoa com deficiência, além de oferecer momentos de lazer para toda a família.</p>
          </div>
          <div className={styles.institutionalCard}>
            <h3 className={styles.infoTitle}>VISÃO</h3>
            <p className={styles.infoText}>Uma sociedade que afasta-se da ideia de que apenas os corpos normativos são saudáveis e adequados, e que aceita os corpos reais como capazes de fazer e ocupar.</p>
          </div>
          <div className={styles.institutionalCard}>
            <h3 className={styles.infoTitle}>VALORES</h3>
            <p className={styles.infoText}>Alegria de conviver em comunidade, esporte adaptado acessível, independência e autonomia para todas as pessoas.</p>
          </div>
        </div>
      </div>
    </Section>
  );
}
