import { Send, MessageCircle } from "lucide-react";

export function Contact() {
  return (
    <section id="contato" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="flex flex-col md:flex-row">
            
            {/* Como Participar / Info */}
            <div className="md:w-5/12 bg-blue-900 text-white p-10 flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-bold mb-4">Faça Parte</h2>
                <p className="text-blue-100 mb-8 leading-relaxed">
                  Você pode apoiar nosso projeto de diversas formas. Escolha como quer participar e entre em contato!
                </p>
                
                <div className="space-y-6">
                  <div>
                    <h4 className="text-xl font-bold text-green-400 mb-1">Participante</h4>
                    <p className="text-blue-100 text-sm">Para pessoas com deficiência que desejam praticar canoa havaiana.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-green-400 mb-1">Voluntário</h4>
                    <p className="text-blue-100 text-sm">Para pessoas que querem ajudar na logística, apoio no mar ou organização.</p>
                  </div>
                  <div>
                    <h4 className="text-xl font-bold text-green-400 mb-1">Apoiador</h4>
                    <p className="text-blue-100 text-sm">Para empresas ou pessoas físicas que desejam patrocinar o projeto.</p>
                  </div>
                </div>
              </div>
              
              <div className="mt-12">
                <a 
                  href="https://wa.me/5521999999999" 
                  target="_blank" 
                  rel="noreferrer"
                  className="bg-green-500 hover:bg-green-400 text-white w-full py-4 rounded-xl flex items-center justify-center gap-2 font-bold transition-colors focus:outline-none focus:ring-4 focus:ring-green-300"
                >
                  <MessageCircle size={24} />
                  Falar no WhatsApp
                </a>
              </div>
            </div>
            
            {/* Formulário */}
            <div className="md:w-7/12 p-10">
              <h3 className="text-2xl font-bold text-blue-900 mb-6">Envie uma Mensagem</h3>
              
              <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">Nome Completo</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    placeholder="Seu nome"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    required
                  />
                </div>
                
                <div className="flex flex-col sm:flex-row gap-4">
                  <div className="w-full sm:w-1/2">
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">E-mail</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email" 
                      placeholder="seu@email.com"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                      required
                    />
                  </div>
                  <div className="w-full sm:w-1/2">
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Telefone / WhatsApp</label>
                    <input 
                      type="tel" 
                      id="phone" 
                      name="phone" 
                      placeholder="(00) 00000-0000"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="interest" className="block text-sm font-medium text-gray-700 mb-1">Interesse</label>
                  <select 
                    id="interest" 
                    name="interest"
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white"
                  >
                    <option value="participar">Quero participar como PCD</option>
                    <option value="voluntario" id="seja-voluntario">Quero ser voluntário</option>
                    <option value="apoiar">Quero apoiar/patrocinar</option>
                    <option value="duvida">Tenho uma dúvida</option>
                  </select>
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Mensagem</label>
                  <textarea 
                    id="message" 
                    name="message" 
                    rows={4} 
                    placeholder="Escreva sua mensagem aqui..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors resize-none"
                    required
                  ></textarea>
                </div>
                
                <button 
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl flex items-center justify-center gap-2 transition-colors focus:outline-none focus:ring-4 focus:ring-blue-300 mt-6"
                >
                  <Send size={20} />
                  Enviar Mensagem
                </button>
              </form>
            </div>
            
          </div>
        </div>
      </div>
    </section>
  );
}
