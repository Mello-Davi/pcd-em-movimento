import { Section } from "../../ui/Section";
import { Mail, Phone, MapPin } from "lucide-react";
import styles from "./styles.module.css";
import { Button } from "../../ui/Button";
import { useId } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";

export function Contact() {
  const nameId = useId();
  const emailId = useId();
  const messageId = useId();
  const { ref, isVisible } = useScrollReveal();

  return (
    <Section id="contato" theme="light" className={styles.contactSection} animated={false}>
      <div 
        ref={ref as React.RefObject<HTMLDivElement>} 
        className={`${styles.container} reveal ${isVisible ? "visible" : ""}`}
      >
        <div className={styles.contactLayout}>
          <div className={styles.contactDetails}>
            <span className={styles.tag} aria-hidden="true">Contato</span>
            <h2 className={styles.title}>Vamos conversar?</h2>
            <p className={styles.description}>
              Ficou com alguma dúvida ou quer saber mais detalhes sobre o projeto? Mande uma mensagem para a gente. Respondemos em até 24 horas úteis.
            </p>
            
            <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" className={styles.whatsappAction} aria-label="Falar pelo WhatsApp (abre em nova aba)">
              <svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
              Falar pelo WhatsApp
            </a>

            <div className={styles.channelsList}>
              <div className={styles.channelItem}>
                <div className={styles.channelIcon} aria-hidden="true"><Mail aria-hidden="true" size={20} className="text-brand-dark" /></div>
                <span>contato@pcdemmovimento.org.br</span>
              </div>
              <div className={styles.channelItem}>
                <div className={styles.channelIcon} aria-hidden="true"><Phone aria-hidden="true" size={20} className="text-brand-dark" /></div>
                <span>(11) 99999-9999</span>
              </div>
              <div className={styles.channelItem}>
                <div className={styles.channelIcon} aria-hidden="true"><MapPin aria-hidden="true" size={20} className="text-brand-dark" /></div>
                <span>São Paulo — SP, Brasil</span>
              </div>
            </div>
          </div>

          <div className={styles.messageFormWrapper}>
            <h3 className={styles.formTitle}>Envie uma mensagem</h3>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel} htmlFor={nameId}>Nome completo *</label>
                <input id={nameId} type="text" className={styles.input} placeholder="Seu nome" required aria-required="true" />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel} htmlFor={emailId}>E-mail *</label>
                <input id={emailId} type="email" className={styles.input} placeholder="seu@email.com" required aria-required="true" />
              </div>
              <div className={styles.inputGroup}>
                <label className={styles.inputLabel} htmlFor={messageId}>Mensagem *</label>
                <textarea id={messageId} className={styles.textarea} placeholder="Conte-nos um pouco sobre você e como podemos ajudar..." rows={4} required aria-required="true"></textarea>
              </div>
              <Button type="submit" variant="primary" fullWidth>Enviar Mensagem</Button>
            </form>
          </div>
        </div>
      </div>
      
      <div className={styles.waveDivider} aria-hidden="true">
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" style={{ width: "100%", height: "100%" }}>
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="#122132" />
        </svg>
      </div>
    </Section>
  );
}
