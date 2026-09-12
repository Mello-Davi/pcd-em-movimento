import React, { useState } from "react";
import { Send, MessageCircle } from "lucide-react";
import { Button } from "../../ui/Button";
import { Section } from "../../ui/Section";
import { SectionTitle } from "../../ui/SectionTitle";
import { SendContactMessageUseCase } from "../../../core/application/use-cases/SendContactMessageUseCase";
import { MockContactRepository } from "../../../infrastructure/repositories/MockContactRepository";
import type { ContactMessage } from "../../../core/domain/entities/ContactMessage";
import styles from "./styles.module.css";

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
      <div className={styles.cardWrapper}>
        <div className={styles.layout}>
          
          <aside className={styles.infoSidebar}>
            <div>
              <SectionTitle theme="dark">Faça Parte</SectionTitle>
              <p className={styles.infoDescription}>
                Você pode apoiar nosso projeto de diversas formas. Escolha como quer participar e entre em contato!
              </p>
              
              <div className={styles.optionsList}>
                <div>
                  <h4 className={styles.optionTitle}>Participante</h4>
                  <p className={styles.optionDescription}>Para pessoas com deficiência que desejam praticar canoa havaiana.</p>
                </div>
                <div>
                  <h4 className={styles.optionTitle}>Voluntário</h4>
                  <p className={styles.optionDescription}>Para pessoas que querem ajudar na logística, apoio no mar ou organização.</p>
                </div>
                <div>
                  <h4 className={styles.optionTitle}>Apoiador</h4>
                  <p className={styles.optionDescription}>Para empresas ou pessoas físicas que desejam patrocinar o projeto.</p>
                </div>
              </div>
            </div>
            
            <div className="mt-12">
              <a 
                href="https://wa.me/5521999999999" 
                target="_blank" 
                rel="noreferrer"
                className={styles.whatsappButton}
              >
                <MessageCircle size={24} />
                Falar no WhatsApp
              </a>
            </div>
          </aside>
          
          <div className={styles.formArea}>
            <SectionTitle theme="light" className="!mb-6">Envie uma Mensagem</SectionTitle>
            
            <form className={styles.formWrapper} onSubmit={handleSubmit}>
              <div className={styles.formGroup}>
                <label htmlFor="name" className={styles.label}>Nome Completo</label>
                <input 
                  type="text" id="name" name="name" 
                  value={formData.name} onChange={handleChange}
                  placeholder="Seu nome" className={styles.input} required
                />
              </div>
              
              <div className={styles.formRow}>
                <div className="w-full sm:w-1/2">
                  <label htmlFor="email" className={styles.label}>E-mail</label>
                  <input 
                    type="email" id="email" name="email" 
                    value={formData.email} onChange={handleChange}
                    placeholder="seu@email.com" className={styles.input} required
                  />
                </div>
                <div className="w-full sm:w-1/2">
                  <label htmlFor="phone" className={styles.label}>Telefone / WhatsApp</label>
                  <input 
                    type="tel" id="phone" name="phone" 
                    value={formData.phone} onChange={handleChange}
                    placeholder="(00) 00000-0000" className={styles.input}
                  />
                </div>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="interest" className={styles.label}>Interesse</label>
                <select 
                  id="interest" name="interest"
                  value={formData.interest} onChange={handleChange}
                  className={styles.input}
                >
                  <option value="participar">Quero participar como PCD</option>
                  <option value="voluntario" id="seja-voluntario">Quero ser voluntário</option>
                  <option value="apoiar">Quero apoiar/patrocinar</option>
                  <option value="duvida">Tenho uma dúvida</option>
                </select>
              </div>
              
              <div className={styles.formGroup}>
                <label htmlFor="message" className={styles.label}>Mensagem</label>
                <textarea 
                  id="message" name="message" 
                  value={formData.message} onChange={handleChange}
                  rows={4} placeholder="Escreva sua mensagem aqui..."
                  className={`${styles.input} resize-none`} required
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
