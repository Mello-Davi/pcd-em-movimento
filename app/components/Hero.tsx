export function Hero() {
  return (
    <section 
      id="inicio"
      className="relative w-full h-[80vh] min-h-[600px] flex items-center justify-center bg-blue-900 overflow-hidden"
    >
      {/* Background Overlay */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-blue-900/70 mix-blend-multiply z-10" />
        {/* Usando uma imagem genérica como placeholder - imagem de fundo com pessoas praticando canoa havaiana */}
        <img
          src="https://images.unsplash.com/photo-1544079867-b50a0063d810?q=80&w=2070&auto=format&fit=crop"
          alt="Pessoas praticando canoa havaiana no mar ao entardecer"
          className="w-full h-full object-cover"
        />
      </div>

      <div className="container relative z-10 mx-auto px-4 text-center">
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-white mb-6 drop-shadow-lg leading-tight max-w-4xl mx-auto">
          Movimento que transforma vidas
        </h1>
        <p className="text-xl md:text-2xl text-blue-50 mb-10 max-w-2xl mx-auto drop-shadow-md">
          Promovendo inclusão, autonomia e qualidade de vida para pessoas com deficiência através do esporte e contato com a natureza.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="/#projeto"
            className="w-full sm:w-auto bg-white text-blue-900 hover:bg-gray-100 font-bold text-lg py-4 px-8 rounded-full transition-colors focus:outline-none focus:ring-4 focus:ring-white/50"
          >
            Conheça o Projeto
          </a>
          <a
            href="/#seja-voluntario"
            className="w-full sm:w-auto bg-green-600 text-white hover:bg-green-500 font-bold text-lg py-4 px-8 rounded-full transition-colors focus:outline-none focus:ring-4 focus:ring-green-600/50"
          >
            Seja Voluntário
          </a>
        </div>
      </div>
    </section>
  );
}
