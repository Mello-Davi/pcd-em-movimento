import { Section } from "../../ui/Section";
import { SectionTitle } from "../../ui/SectionTitle";
import { Star } from "lucide-react";
import testimonialVideo from "../../../assets/IMG_7452.MOV";
import styles from "./styles.module.css";

const testimonials = [
  {
    text: "Meu encontro com o projeto foi um encontro feliz, porque ele me permite uma atividade de lazer, uma atividade de confraternização com outras pessoas com deficiência e é muito importante dizer que estar próxima ao mar faz com que a gente tenha o reconhecimento de que nós pessoas com deficiência podemos tudo o que a gente quiser fazer. E é muito gratificante que o PCD em Movimento proporcione esse encontro para nós. Eu agradeço demais à coordenação desse projeto",
    author: "Gislana Vale",
    role: "Participante — Deficiência Visual",
  },
  {
    text: "Eu sou amputada de ambas as pernas. Quando eu cheguei aqui, eu encontrei uma família com acolhimento, com abraço gostoso, sincero. Tudo que é mar pra mim é maravilhoso, e isso me dá uma paz. É indescritível. Se você puder, venha conhecer o PCD em Movimento, que é maravilhoso e uma grande família.",
    author: "Denise Penaforte",
    role: "Participante — Amputada de Ambas as pernas",
  },
  {
    text: "Quando chegamos num projeto como voluntária a ideia inicial é ajudar, somar, multiplicar. Mas, ser voluntária do projeto PcD em Movimento é muito mais que montar canoas, levar coletes salva vidas, pegar remos. Lidamos com pessoas com as mais variadas necessidades, por isso aprendemos com elas, trocamos, nos despimos de capacitismo incrustado. Quando percebemos, crescemos e amadurecemos juntos. É um privilégio.",
    author: "Cristina Guimarães",
    role: "Voluntária",
  },
];

export function Testimonials() {
  return (
    <Section id="depoimentos" theme="dark">
      <div className={styles.container}>
        <SectionTitle
          tag="Depoimentos"
          title="Histórias que nos movem"
          theme="light"
          align="center"
        />
        <p className={styles.subtitle}>As palavras de quem viveu a transformação</p>

        <div className={styles.videoWrapper}>
          <video
            className={styles.video}
            controls
            playsInline
            aria-label="Depoimento em vídeo de participantes do PCD em Movimento"
          >
            <source src={testimonialVideo} type="video/mp4" />
            Seu navegador não suporta a reprodução de vídeo.
          </video>
        </div>

        <div className={styles.testimonialsCarousel}>
          {testimonials.map((t, idx) => (
            <div key={idx} className={styles.testimonialCard}>
              <div className={styles.ratingContainer} aria-label="Avaliação de 5 estrelas">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} aria-hidden="true" size={16} className="fill-brand-green text-brand-green" />
                ))}
              </div>
              <p className={styles.testimonialQuote}>"{t.text}"</p>

              <div className={styles.authorInfo}>
                <div>
                  <h4 className={styles.authorName}>{t.author}</h4>
                  <p className={styles.authorRole}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
