import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Link } from "react-router";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    { name: "Início", href: "/#inicio" },
    { name: "Quem Somos", href: "/#quem-somos" },
    { name: "Projeto", href: "/#projeto" },
    { name: "Como Participar", href: "/#participar" },
    { name: "Contato", href: "/#contato" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white border-b border-gray-100 shadow-sm">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        {/* Logo Placeholder */}
        <Link 
          to="/" 
          className="flex items-center gap-2 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-lg p-1"
          aria-label="Página inicial do PCD em Movimento"
        >
          <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
            P
          </div>
          <span className="font-bold text-xl text-blue-900 hidden sm:block">
            PCD em Movimento
          </span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8" aria-label="Navegação principal">
          <ul className="flex items-center gap-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-gray-700 hover:text-blue-600 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md px-2 py-1"
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
          <a
            href="/#seja-voluntario"
            className="bg-green-600 hover:bg-green-700 text-white font-semibold py-2.5 px-6 rounded-full transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
            aria-label="Seja um voluntário do projeto"
          >
            Seja Voluntário
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-expanded={isMenuOpen}
          aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 px-4 py-4 shadow-lg absolute w-full">
          <nav aria-label="Navegação mobile">
            <ul className="flex flex-col gap-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="block text-gray-800 text-lg font-medium hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600 rounded-md px-2 py-1"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              <li className="pt-2">
                <a
                  href="/#seja-voluntario"
                  className="block w-full text-center bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green-600"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Seja Voluntário
                </a>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
