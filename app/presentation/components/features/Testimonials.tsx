import React, { useEffect, useState } from "react";
import { Quote } from "lucide-react";
import { Section } from "../ui/Section";
import { SectionTitle } from "../ui/SectionTitle";
import { StaticTestimonialRepository } from "../../../infrastructure/repositories/StaticTestimonialRepository";
import type { Testimonial } from "../../../core/domain/entities/Testimonial";

const testimonialStyles = {
  grid: "grid grid-cols-1 md:grid-cols-3 gap-8",
  card: "bg-blue-50 p-8 rounded-2xl relative mt-8",
  avatarContainer: "absolute -top-8 left-1/2 -translate-x-1/2",
  avatarImage: "w-16 h-16 rounded-full border-4 border-white object-cover shadow-sm",
  quoteIcon: "text-green-500 mb-4 mt-6 mx-auto opacity-50",
  contentText: "text-gray-700 italic mb-6 text-center",
  authorContainer: "text-center mt-auto",
  authorName: "font-bold text-blue-900",
  authorRole: "text-sm text-gray-500"
};

const testimonialRepository = new StaticTestimonialRepository();

export function Testimonials() {
  const [testimonials, setTestimonials] = useState<Testimonial[]>([]);

  useEffect(() => {
    testimonialRepository.getTestimonials().then(setTestimonials);
  }, []);

  return (
    <Section id="depoimentos" theme="white">
      <SectionTitle centered>Ouvindo Quem Faz Acontecer</SectionTitle>
      
      <div className={testimonialStyles.grid}>
        {testimonials.map((testimonial) => (
          <article key={testimonial.id} className={testimonialStyles.card}>
            <div className={testimonialStyles.avatarContainer}>
              <img 
                src={testimonial.authorAvatarUrl} 
                alt={`Foto de ${testimonial.authorName}`} 
                className={testimonialStyles.avatarImage}
              />
            </div>
            <Quote size={32} className={testimonialStyles.quoteIcon} aria-hidden="true" />
            <p className={testimonialStyles.contentText}>
              "{testimonial.content}"
            </p>
            <footer className={testimonialStyles.authorContainer}>
              <h4 className={testimonialStyles.authorName}>{testimonial.authorName}</h4>
              <p className={testimonialStyles.authorRole}>{testimonial.authorRole}</p>
            </footer>
          </article>
        ))}
      </div>
    </Section>
  );
}
