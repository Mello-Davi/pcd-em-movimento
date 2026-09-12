import os

def write_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w') as f:
        f.write(content.strip() + "\n")

# --- PROJECT ---
write_file("app/components/features/Project/index.tsx", """
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
              <Eye className="text-blue-600" size={28} />
            </div>
            <h3 className={styles.cardTitle}>Deficiência Visual</h3>
            <p className={styles.cardText}>
              Navegamos com guias visuais e comunicação verbal constante, garantindo segurança e autonomia total no barco.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapperGreen}>
              <Ear className="text-green-700" size={28} />
            </div>
            <h3 className={styles.cardTitle}>Deficiência Auditiva</h3>
            <p className={styles.cardText}>
              Utilizamos sinais visuais, língua de sinais e comunicação visual para integração plena na remada.
            </p>
          </div>

          <div className={styles.card}>
            <div className={styles.iconWrapperLightBlue}>
              <Accessibility className="text-blue-800" size={28} />
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
""")

write_file("app/components/features/Project/styles.module.css", """
@reference "tailwindcss";

.container { @apply container mx-auto px-4; }
.subtitle { @apply text-center text-gray-600 max-w-2xl mx-auto text-lg mb-16; }

.grid { @apply grid grid-cols-1 md:grid-cols-3 gap-8; }
.card { @apply bg-white rounded-2xl p-8 shadow-sm border border-gray-100 flex flex-col items-start; }

.iconWrapperBlue { @apply bg-blue-100 p-4 rounded-xl mb-6; }
.iconWrapperGreen { @apply bg-green-100 p-4 rounded-xl mb-6; }
.iconWrapperLightBlue { @apply bg-blue-200 p-4 rounded-xl mb-6; }

.cardTitle { @apply font-serif text-xl font-bold text-brand-dark mb-4; }
.cardText { @apply text-gray-600 leading-relaxed text-sm; }
""")

# --- BENEFITS ---
write_file("app/components/features/Benefits/index.tsx", """
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
""")

write_file("app/components/features/Benefits/styles.module.css", """
@reference "tailwindcss";

.container { @apply container mx-auto px-4; }
.grid { @apply grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center; }

.content { @apply flex flex-col gap-8; }
.title { @apply font-serif text-3xl md:text-4xl font-bold text-brand-dark; }

.list { @apply flex flex-col gap-5; }
.listItem { @apply flex items-start gap-4 text-gray-700 font-medium; }
.icon { @apply text-brand-green shrink-0 mt-0.5; }

.imageContainer { @apply relative rounded-3xl overflow-hidden shadow-2xl h-80 lg:h-[500px]; }
.image { @apply w-full h-full object-cover; }
.imageOverlay { @apply absolute bottom-0 left-0 w-full bg-gradient-to-t from-black/80 to-transparent p-8 pt-20; }
.quote { @apply font-serif text-2xl font-bold text-white mb-2; }
.quoteAuthor { @apply text-gray-300 text-sm; }
""")

# --- LOCATION ---
write_file("app/components/features/Location/index.tsx", """
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
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className={styles.cardTitle}>Sábados</h3>
                  <p className={styles.time}>07:00 – 10:00h</p>
                  <p className={styles.address}>
                    <MapPin size={16} className="inline mr-1" />
                    Represa de Guarapiranga, São Paulo
                  </p>
                </div>
              </div>

              <div className={styles.locationCardGreen}>
                <div className={styles.iconWrapperGreen}>
                  <Clock className="text-white" size={24} />
                </div>
                <div>
                  <h3 className={styles.cardTitle}>Domingos</h3>
                  <p className={styles.timeGreen}>08:00 – 11:00h</p>
                  <p className={styles.addressGreen}>
                    <MapPin size={16} className="inline mr-1" />
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
""")

write_file("app/components/features/Location/styles.module.css", """
@reference "tailwindcss";

.container { @apply container mx-auto px-4; }
.grid { @apply grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center; }

.content { @apply flex flex-col gap-6; }
.tag { @apply bg-green-100 text-green-800 font-bold text-sm tracking-wider uppercase px-4 py-1.5 rounded-full self-start; }
.title { @apply font-serif text-4xl md:text-5xl font-bold text-brand-dark leading-tight; }
.description { @apply text-gray-700 leading-relaxed; }

.cardsList { @apply flex flex-col gap-4 mt-4; }

.locationCard { @apply bg-brand-light rounded-xl border border-blue-100 p-6 flex items-start gap-5; }
.iconWrapperBlue { @apply bg-blue-600 p-3 rounded-xl shrink-0; }
.cardTitle { @apply font-serif font-bold text-xl text-brand-dark mb-1; }
.time { @apply font-bold text-blue-700 mb-2; }
.address { @apply text-gray-600 text-sm flex items-center; }

.locationCardGreen { @apply bg-green-50 rounded-xl border border-green-100 p-6 flex items-start gap-5; }
.iconWrapperGreen { @apply bg-brand-green p-3 rounded-xl shrink-0; }
.timeGreen { @apply font-bold text-brand-green mb-2; }
.addressGreen { @apply text-gray-600 text-sm flex items-center; }

.alert { @apply bg-brand-dark text-white rounded-xl p-6 mt-4 text-sm leading-relaxed; }

.mapContainer { @apply relative bg-brand-dark rounded-3xl overflow-hidden shadow-xl h-80 lg:h-[600px] flex items-center justify-center; }
.mapOverlay { @apply flex flex-col items-center text-center px-6; }
.mapTitle { @apply font-serif text-2xl font-bold text-white mb-2; }
.mapSubtitle { @apply text-gray-300 mb-8; }
.mapButton { @apply bg-white/10 hover:bg-white/20 border border-white/30 text-white font-semibold py-3 px-8 rounded-lg transition-colors backdrop-blur-sm; }
""")

