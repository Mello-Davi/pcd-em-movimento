import { Heart, Target, Users } from "lucide-react";

export function About() {
  return (
    <section id="quem-somos" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">Quem Somos</h2>
          <p className="text-lg text-gray-700 leading-relaxed">
            A <strong>PCD em Movimento</strong> é uma organização não-governamental dedicada à inclusão, 
            mobilidade e integração social de pessoas com deficiência. Acreditamos que o esporte, 
            em especial a canoa havaiana, é uma ferramenta poderosa para a superação de limites e 
            conexão com a natureza.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Missão */}
          <div className="bg-blue-50 p-8 rounded-2xl text-center border border-blue-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
              <Target size={32} aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Missão</h3>
            <p className="text-gray-700">
              Promover a inclusão social e melhorar a qualidade de vida de pessoas com deficiência 
              por meio da prática esportiva adaptada.
            </p>
          </div>

          {/* Visão */}
          <div className="bg-blue-50 p-8 rounded-2xl text-center border border-blue-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
              <Heart size={32} aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Visão</h3>
            <p className="text-gray-700">
              Ser referência em projetos esportivos adaptados e criar um mundo mais igualitário, 
              onde o mar seja acessível para todos.
            </p>
          </div>

          {/* Valores */}
          <div className="bg-blue-50 p-8 rounded-2xl text-center border border-blue-100 hover:shadow-lg transition-shadow">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mx-auto mb-6 text-white">
              <Users size={32} aria-hidden="true" />
            </div>
            <h3 className="text-2xl font-bold text-blue-900 mb-4">Valores</h3>
            <p className="text-gray-700">
              Acolhimento, respeito à diversidade, empatia, acessibilidade, superação e amor à natureza.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
