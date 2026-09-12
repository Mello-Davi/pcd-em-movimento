import { Quote } from "lucide-react";

export function Testimonials() {
  const testimonials = [
    {
      id: 1,
      name: "Maria Silva",
      role: "Participante, Deficiência Visual",
      text: "A canoa havaiana me trouxe uma sensação de liberdade que eu nunca tinha experimentado. A equipe me passa muita segurança e eu me sinto parte de uma grande família.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 2,
      name: "João Santos",
      role: "Participante, Cadeirante",
      text: "Eu achava que praticar esportes no mar seria impossível para mim. O projeto me mostrou que com as adaptações certas, a água é o lugar mais acessível que existe.",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
    },
    {
      id: 3,
      name: "Ana Costa",
      role: "Voluntária",
      text: "Ser voluntária no PCD em Movimento mudou minha perspectiva sobre acessibilidade e empatia. Cada remada é um aprendizado diferente com essas pessoas incríveis.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=200&auto=format&fit=crop"
    }
  ];

  return (
    <section id="depoimentos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12 text-center">Ouvindo Quem Faz Acontecer</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <div key={testimonial.id} className="bg-blue-50 p-8 rounded-2xl relative mt-8">
              <div className="absolute -top-8 left-1/2 -translate-x-1/2">
                <img 
                  src={testimonial.image} 
                  alt={`Foto de ${testimonial.name}`} 
                  className="w-16 h-16 rounded-full border-4 border-white object-cover shadow-sm"
                />
              </div>
              <Quote size={32} className="text-green-500 mb-4 mt-6 mx-auto opacity-50" aria-hidden="true" />
              <p className="text-gray-700 italic mb-6 text-center">
                "{testimonial.text}"
              </p>
              <div className="text-center mt-auto">
                <h4 className="font-bold text-blue-900">{testimonial.name}</h4>
                <p className="text-sm text-gray-500">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
