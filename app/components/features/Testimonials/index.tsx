"use client";

import { Section } from "../../ui/Section";
import { SectionTitle } from "../../ui/SectionTitle";
import { Star, FileText } from "lucide-react";
import { useEffect, useRef } from "react";
import styles from "./styles.module.css";

const testimonials = [
  {
    text: "Meu encontro com o projeto foi um encontro feliz, porque ele me permite uma atividade de lazer, uma atividade de confraternização com outras pessoas com deficiência e é muito importante dizer que estar próxima ao mar faz com que a gente tenha o reconhecimento de que nós pessoas com deficiência podemos tudo o que a gente quiser fazer. E é muito gratificante que o PCD em Movimento proporcione esse encontro para nós. Eu agradeço demais à coordenação desse projeto.",
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
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    /* Respeita preferência de movimento reduzido (WCAG 2.3.3) */
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            video.play().catch(() => {
              /* Autoplay bloqueado pelo browser — o usuário pode iniciar manualmente */
            });
          } else {
            video.pause();
          }
        }
      },
      { threshold: 0.4 }
    );

    observer.observe(video);

    return () => observer.disconnect();
  }, []);

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

        <div className={styles.videoSection}>
          <div className={styles.videoWrapper}>
            <video
              ref={videoRef}
              className={styles.video}
              controls
              playsInline
              muted
              loop
              preload="metadata"
              width="480"
              height="854"
              aria-label="Depoimento em vídeo de participantes do projeto PCD em Movimento"
            >
              <source src="/assets/depoimento.mp4" type="video/mp4" />
              Seu navegador não suporta a reprodução de vídeo.
            </video>
          </div>

          {/* Transcrição Acessível para Deficientes Visuais e Auditivos (WCAG 1.2.1 / 1.2.3) */}
          <details className={styles.transcriptDetails}>
            <summary className={styles.transcriptSummary}>
              <FileText size={18} aria-hidden="true" />
              <span>Acessibilidade: Ler transcrição do vídeo com audiodescrição</span>
            </summary>
            <div className={styles.transcriptContent}>
              <p>
                <strong>Audiodescrição das cenas:</strong> O vídeo registra os encontros do projeto PCD em Movimento na Praia de Charitas em Niterói. Participantes com diferentes deficiências (visual, motora e amputações) e voluntários preparam canoas polinésias, colocam coletes salva-vidas e remam em mar aberto ao som de orientações de segurança e entusiasmo coletivo.
              </p>
              <p>
                <strong>Fala dos participantes:</strong> Os participantes compartilham a sensação de acolhimento sem capacitismo, a conexão terapêutica e de paz com o mar, a descoberta de autonomia e a criação de fortes laços de amizade e família comunitária.
              </p>
            </div>
          </details>
        </div>

        <div className={styles.testimonialsCarousel} role="region" aria-label="Carrossel de depoimentos">
          {testimonials.map((t, idx) => (
            <article key={idx} className={styles.testimonialCard} aria-label={`Depoimento de ${t.author}`}>
              <div className={styles.ratingContainer} aria-label="Avaliação de 5 estrelas">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} aria-hidden="true" size={16} className="fill-brand-green text-brand-green" />
                ))}
              </div>
              <blockquote className={styles.testimonialQuote}>"{t.text}"</blockquote>

              <div className={styles.authorInfo}>
                <div>
                  <h3 className={styles.authorName}>{t.author}</h3>
                  <p className={styles.authorRole}>{t.role}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
