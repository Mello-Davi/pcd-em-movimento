import React, { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { Section } from "../../ui/Section";
import { SectionTitle } from "../../ui/SectionTitle";
import { StaticTestimonialRepository } from "../../../infrastructure/repositories/StaticTestimonialRepository";
import type { Testimonial } from "../../../core/domain/entities/Testimonial";
import styles from "./styles.module.css";

const testimonialRepository = new StaticTestimonialRepository();

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    testimonialRepository.getTestimonials().then(setTestimonials);
  }, []);

  return (
    <Section id="depoimentos" theme="white">
      <SectionTitle centered>Ouvindo Quem Faz Acontecer</SectionTitle>
      
      <div className={styles.grid}>
        {testimonials.map((testimonial) => (
          <article key={testimonial.id} className={styles.card}>
            <div className={styles.avatarContainer}>
              <img 
                src={testimonial.authorAvatarUrl} 
                alt={`Foto de ${testimonial.authorName}`} 
                className={styles.avatarImage}
              />
            </div>
            <Quote size={32} className={styles.quoteIcon} aria-hidden="true" />
            <p className={styles.contentText}>
              "{testimonial.content}"
            </p>
            <footer className={styles.authorContainer}>
              <h4 className={styles.authorName}>{testimonial.authorName}</h4>
              <p className={styles.authorRole}>{testimonial.authorRole}</p>
            </footer>
          </article>
        ))}
      </div>
    </Section>
  );
}
