import { Section } from "../../ui/Section";
import { SectionTitle } from "../../ui/SectionTitle";
import { Star } from "lucide-react";
import styles from "./styles.module.css";

export function Testimonials() {
  const testimonials = [
    {
      text: "Quando entrei na canoa pela primeira vez, senti o vento no rosto e ouvi o barulho das águas. Foi a primeira vez em anos que me senti completamente livre. A equipe me fez sentir em casa desde o primeiro momento.",
      author: "Mariana Costa",
      role: "Participante — Deficiência Visual",
      initials: "MC",
      color: "bg-blue-600"
    },
    {
      text: "Eu nunca imaginei que praticaria esporte aquático. O projeto não só mudou minha condição física — mudou minha autoestima. Hoje sou um remador de verdade, e isso me dá orgulho todos os dias.",
      author: "Roberto Alves",
      role: "Participante — Cadeirante",
      initials: "RA",
      color: "bg-brand-green"
    },
    {
      text: "Ser voluntária no PCD em Movimento é a experiência mais enriquecedora da minha vida. Ver a transformação no rosto das pessoas quando chegam ao oceano pela primeira vez é algo que não tem preço.",
      author: "Cláudia Mendes",
      role: "Voluntária há 3 anos",
      initials: "CM",
      color: "bg-blue-900"
    }
  ];

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

        <div className={styles.testimonialsCarousel}>
          {testimonials.map((t, idx) => (
            <div key={idx} className={styles.testimonialCard}>
              <div className={styles.ratingContainer} aria-label="Avaliação de 5 estrelas">
                {[...Array(5)].map((_, i) => <Star key={i} aria-hidden="true" size={16} className="fill-brand-green text-brand-green" />)}
              </div>
              <p className={styles.testimonialQuote}>"{t.text}"</p>
              
              <div className={styles.authorInfo}>
                <div className={`${styles.avatar} ${t.color}`}>{t.initials}</div>
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
