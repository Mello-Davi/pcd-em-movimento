import { Activity, Anchor, Sun } from "lucide-react";

export function Project() {
  return (
    <section id="projeto" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          {/* Texto explicativo */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">O Projeto: Canoa Havaiana</h2>
            <p className="text-lg text-gray-700 mb-6 leading-relaxed">
              A Canoa Havaiana (Va'a) é um esporte que exige trabalho em equipe, sincronia e respeito. 
              Nosso projeto adapta as embarcações e a metodologia de ensino para atender pessoas com diferentes 
              tipos de deficiência, promovendo autonomia e socialização.
            </p>
            
            <ul className="space-y-6 mt-8">
              <li className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0 text-green-700">
                  <Activity size={24} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Saúde e Reabilitação</h4>
                  <p className="text-gray-700">O remo fortalece a musculatura, melhora a capacidade cardiorrespiratória e a coordenação motora.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0 text-green-700">
                  <Anchor size={24} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Inclusão Total</h4>
                  <p className="text-gray-700">Atendemos pessoas com deficiência visual, auditiva, cadeirantes e deficiências intelectuais, adaptando a experiência para cada necessidade.</p>
                </div>
              </li>
              <li className="flex gap-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center shrink-0 text-green-700">
                  <Sun size={24} aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-xl font-bold text-blue-900 mb-2">Socialização e Natureza</h4>
                  <p className="text-gray-700">O contato com o mar e o trabalho em equipe na canoa promovem laços de amizade e bem-estar emocional.</p>
                </div>
              </li>
            </ul>
          </div>
          
          {/* Imagens ilustrativas */}
          <div className="lg:w-1/2 w-full grid grid-cols-2 gap-4">
            <img 
              src="https://images.unsplash.com/photo-1596489370217-1033b006c9bc?q=80&w=1000&auto=format&fit=crop" 
              alt="Canoa havaiana no mar aberto" 
              className="rounded-2xl w-full h-64 object-cover mt-8"
            />
            <img 
              src="https://images.unsplash.com/photo-1544079867-b50a0063d810?q=80&w=1000&auto=format&fit=crop" 
              alt="Equipe remando junta na canoa" 
              className="rounded-2xl w-full h-80 object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
