import React, { useState } from "react";
import { Send, MessageCircle } from "lucide-react";
import { Button } from "../ui/Button";
import { Section } from "../ui/Section";
import { SectionTitle } from "../ui/SectionTitle";
import { SendContactMessageUseCase } from "../../../core/application/use-cases/SendContactMessageUseCase";
import { MockContactRepository } from "../../../infrastructure/repositories/MockContactRepository";
import type { ContactMessage, ContactInterest } from "../../../core/domain/entities/ContactMessage";

const contactStyles = {
  cardWrapper: "max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden",
  layout: "flex flex-col md:flex-row",
  infoSidebar: "md:w-5/12 bg-blue-900 text-white p-10 flex flex-col justify-between",
  infoDescription: "text-blue-100 mb-8 leading-relaxed",
  optionsList: "space-y-6",
  optionTitle: "text-xl font-bold text-green-400 mb-1",
  optionDescription: "text-blue-100 text-sm",
  formArea: "md:w-7/12 p-10",
  formWrapper: "space-y-4",
  formGroup: "block",
  label: "block text-sm font-medium text-gray-700 mb-1",
  input: "w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-colors bg-white",
  formRow: "flex flex-col sm:flex-row gap-4"
};

// Injection for the UI - normally done via Context or DI Container
const contactRepository = new MockContactRepository();
const sendContactMessageUseCase = new SendContactMessageUseCase(contactRepository);

export function Contact() {
  const [formData, setFormData] = useState<ContactMessage>({
    name: "",
    email: "",
    phone: "",
    interest: "duvida",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await sendContactMessageUseCase.execute(formData);
      alert("Mensagem enviada com sucesso!");
      setFormData({ name: "", email: "", phone: "", interest: "duvida", message: "" });
    } catch (error) {
      alert(error instanceof Error ? error.message : "Erro ao enviar a mensagem.");
    }
  };

  return (
    <Section id="contato" theme="light">
      <div className={contactStyles.cardWrapper}>
        <div className={contactStyles.layout}>
          
          <aside className={contactStyles.infoSidebar}>
            <div>
              <SectionTitle theme="dark">Faça Parte</SectionTitle>
              <p className={contactStyles.infoDescription}>
                Você pode apoiar nosso projeto de diversas formas. Escolha como quer participar e entre em contato!
              </p>
              
              <div className={contactStyles.optionsList}>
                <div>
                  <h4 className={contactStyles.optionTitle}>Participante</h4>
                  <p className={contactStyles.optionDescription}>Para pessoas com deficiência que desejam praticar canoa havaiana.</p>
                </div>
                <div>
                  <h4 className={contactStyles.optionTitle}>Voluntário</h4>
                  <p className={contactStyles.optionDescription}>Para pessoas que querem ajudar na logística, apoio no mar ou organização.</p>
                </div>
                <div>
                  <h4 className={contactStyles.optionTitle}>Apoiador</h4>
                  <p className={contactStyles.optionDescription}>Para empresas ou pessoas físicas que desejam patrocinar o projeto.</p>
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
          </aside>
          
          <div className={contactStyles.formArea}>
            <SectionTitle theme="light" className="!mb-6">Envie uma Mensagem</SectionTitle>
            
            <form className={contactStyles.formWrapper} onSubmit={handleSubmit}>
              <div className={contactStyles.formGroup}>
                <label htmlFor="name" className={contactStyles.label}>Nome Completo</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Seu nome"
                  className={contactStyles.input}
                  required
                />
              </div>
              
              <div className={contactStyles.formRow}>
                <div className="w-full sm:w-1/2">
                  <label htmlFor="email" className={contactStyles.label}>E-mail</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="seu@email.com"
                    className={contactStyles.input}
                    required
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <label htmlFor="phone" className={contactStyles.label}>Telefone / WhatsApp</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    value={formData.phone}
                    onChange={handleChange}
                    placeholder="(00) 00000-0000"
                    className={contactStyles.input}
                  />
                </div>
              </div>
              
              <div className={contactStyles.formGroup}>
                <label htmlFor="interest" className={contactStyles.label}>Interesse</label>
                <select 
                  id="interest" 
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  className={contactStyles.input}
                >
                  <option value="participar">Quero participar como PCD</option>
                  <option value="voluntario" id="seja-voluntario">Quero ser voluntário</option>
                  <option value="apoiar">Quero apoiar/patrocinar</option>
                  <option value="duvida">Tenho uma dúvida</option>
                </select>
              </div>
              
              <div className={contactStyles.formGroup}>
                <label htmlFor="message" className={contactStyles.label}>Mensagem</label>
                <textarea 
                  id="message" 
                  name="message" 
                  value={formData.message}
                  onChange={handleChange}
                  rows={4} 
                  placeholder="Escreva sua mensagem aqui..."
                  className={`${contactStyles.input} resize-none`}
                  required
                ></textarea>
              </div>
              
              <Button type="submit" fullWidth className="mt-6">
                <Send size={20} />
                Enviar Mensagem
              </Button>
            </form>
          </div>
          
        </div>
      </div>
    </Section>
  );
}
