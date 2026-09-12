import { MapPin, Clock, Calendar } from "lucide-react";

export function Location() {
  return (
    <section id="onde-acontece" className="py-20 bg-blue-900 text-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          {/* Info */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Onde Acontece</h2>
            <p className="text-xl text-blue-100 mb-8 leading-relaxed">
              Venha conhecer nosso projeto e sentir a energia do mar. 
              Nossa base conta com acessibilidade e equipe preparada para receber você.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg shrink-0">
                  <MapPin size={28} className="text-green-400" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Localização</h4>
                  <p className="text-blue-100">Posto 6, Praia de Copacabana<br />Rio de Janeiro - RJ</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg shrink-0">
                  <Calendar size={28} className="text-green-400" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Dias de Atividade</h4>
                  <p className="text-blue-100">Terças, Quintas e Sábados</p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="bg-white/10 p-3 rounded-lg shrink-0">
                  <Clock size={28} className="text-green-400" aria-hidden="true" />
                </div>
                <div>
                  <h4 className="text-xl font-bold mb-1">Horários</h4>
                  <p className="text-blue-100">Turma 1: 07h00 - 08h30<br />Turma 2: 08h30 - 10h00</p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Mapa placeholder */}
          <div className="lg:w-1/2 w-full h-[400px] bg-gray-200 rounded-2xl overflow-hidden relative">
            <img 
              src="https://images.unsplash.com/photo-1516466723877-e4ec1d736c8a?q=80&w=1000&auto=format&fit=crop" 
              alt="Vista da praia de Copacabana" 
              className="w-full h-full object-cover"
            />
            {/* Overlay indicando o mapa - simulando que ao clicar abre no Maps */}
            <div className="absolute inset-0 bg-blue-900/30 flex items-center justify-center hover:bg-blue-900/40 transition-colors">
              <a 
                href="https://maps.google.com" 
                target="_blank" 
                rel="noreferrer"
                className="bg-white text-blue-900 px-6 py-3 rounded-full font-bold shadow-lg hover:scale-105 transition-transform flex items-center gap-2 focus:outline-none focus:ring-4 focus:ring-blue-500"
              >
                <MapPin size={20} />
                Abrir no Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
