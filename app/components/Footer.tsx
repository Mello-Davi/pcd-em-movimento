import { Mail, Phone, MapPin } from "lucide-react";
import { Link } from "react-router";

export function Footer() {
  return (
    <footer className="bg-blue-900 text-white pt-16 pb-8">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Logo & Sobre */}
          <div className="flex flex-col gap-6">
            <Link 
              to="/" 
              className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-white rounded-lg p-1 w-max"
            >
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-blue-900 font-bold text-xl">
                P
              </div>
              <span className="font-bold text-xl">PCD em Movimento</span>
            </Link>
            <p className="text-blue-100 leading-relaxed text-sm lg:text-base">
              Promovendo inclusão, mobilidade e integração social de pessoas com deficiência através da prática de canoa havaiana.
            </p>
          </div>

          {/* Links Rápidos */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg mb-2">Links Rápidos</h3>
            <ul className="flex flex-col gap-3">
              <li><a href="/#inicio" className="text-blue-100 hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded-sm px-1">Início</a></li>
              <li><a href="/#quem-somos" className="text-blue-100 hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded-sm px-1">Quem Somos</a></li>
              <li><a href="/#projeto" className="text-blue-100 hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded-sm px-1">O Projeto</a></li>
              <li><a href="/#depoimentos" className="text-blue-100 hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded-sm px-1">Depoimentos</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div className="flex flex-col gap-4">
            <h3 className="font-bold text-lg mb-2">Contato</h3>
            <ul className="flex flex-col gap-4">
              <li className="flex items-start gap-3 text-blue-100">
                <MapPin className="shrink-0 mt-1" size={20} aria-hidden="true" />
                <span>Base do Projeto, Praia de Copacabana<br/>Rio de Janeiro, RJ</span>
              </li>
              <li className="flex items-center gap-3 text-blue-100">
                <Phone className="shrink-0" size={20} aria-hidden="true" />
                <span>(21) 99999-9999</span>
              </li>
              <li className="flex items-center gap-3 text-blue-100">
                <Mail className="shrink-0" size={20} aria-hidden="true" />
                <span>contato@pcdemmovimento.org.br</span>
              </li>
            </ul>
          </div>

          {/* Engajamento */}
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-4">
              <h3 className="font-bold text-lg">Faça Parte</h3>
              <a
                href="/#seja-voluntario"
                className="bg-green-600 hover:bg-green-500 text-white font-semibold py-3 px-6 rounded-lg text-center transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-900 focus:ring-green-500"
              >
                Seja Voluntário
              </a>
            </div>
            
            <div className="flex flex-col gap-4 mt-2">
              <h3 className="font-bold text-lg">Redes Sociais</h3>
              <div className="flex items-center gap-4">
                <a 
                  href="#" 
                  className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Siga-nos no Instagram"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                </a>
                <a 
                  href="#" 
                  className="bg-blue-800 p-3 rounded-full hover:bg-blue-700 transition-colors focus:outline-none focus:ring-2 focus:ring-white"
                  aria-label="Curta nossa página no Facebook"
                >
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Informações Legais */}
        <div className="border-t border-blue-800 pt-8 mt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-blue-200 text-sm">
          <p>© {new Date().getFullYear()} PCD em Movimento. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded-sm">Política de Privacidade</a>
            <a href="#" className="hover:text-white hover:underline focus:outline-none focus:ring-2 focus:ring-white rounded-sm">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
