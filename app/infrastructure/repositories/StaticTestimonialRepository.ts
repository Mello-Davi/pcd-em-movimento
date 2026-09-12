import type { Testimonial } from "../../core/domain/entities/Testimonial";

export class StaticTestimonialRepository {
  async getTestimonials(): Promise<Testimonial[]> {
    return [
      {
        id: "1",
        authorName: "Maria Silva",
        authorRole: "Participante, Deficiência Visual",
        content: "A canoa havaiana me trouxe uma sensação de liberdade que eu nunca tinha experimentado. A equipe me passa muita segurança e eu me sinto parte de uma grande família.",
        authorAvatarUrl: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
      },
      {
        id: "2",
        authorName: "João Santos",
        authorRole: "Participante, Cadeirante",
        content: "Eu achava que praticar esportes no mar seria impossível para mim. O projeto me mostrou que com as adaptações certas, a água é o lugar mais acessível que existe.",
        authorAvatarUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
      },
      {
        id: "3",
        authorName: "Ana Costa",
        authorRole: "Voluntária",
        content: "Ser voluntária no PCD em Movimento mudou minha perspectiva sobre acessibilidade e empatia. Cada remada é um aprendizado diferente com essas pessoas incríveis.",
        authorAvatarUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
      }
    ];
  }
}
