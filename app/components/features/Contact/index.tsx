import { Section } from "../../ui/Section";
import { Mail, MapPin, CheckCircle, AlertCircle, Loader } from "lucide-react";
import styles from "./styles.module.css";
import { Button } from "../../ui/Button";
import { useId, useState, type FormEvent } from "react";
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { SendContactMessageUseCase } from "../../../core/application/use-cases/SendContactMessageUseCase";
import { FormspreeContactRepository } from "../../../infrastructure/repositories/FormspreeContactRepository";
import type { ContactInterest } from "../../../core/domain/entities/ContactMessage";

const sendMessage = new SendContactMessageUseCase(new FormspreeContactRepository());

type FormStatus = "idle" | "loading" | "success" | "error";

export function Contact() {
  const nameId = useId();
  const emailId = useId();
  const interestId = useId();
  const messageId = useId();
  const { ref, isVisible } = useScrollReveal();

  const [status, setStatus] = useState<FormStatus>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      await sendMessage.execute({
        name: data.get("name") as string,
        email: data.get("email") as string,
        interest: data.get("interest") as ContactInterest,
        message: data.get("message") as string,
      });
      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setErrorMessage(
        err instanceof Error ? err.message : "Ocorreu um erro inesperado."
      );
    }
  }

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

            <div className={styles.channelsList}>
              <div className={styles.channelItem}>
                <div className={styles.channelIcon} aria-hidden="true">
                  <Mail aria-hidden="true" size={20} className="text-brand-dark" />
                </div>
                <a href="mailto:contato@pcdemmovimento.org.br" className={styles.channelLink}>
                  contato@pcdemmovimento.org.br
                </a>
              </div>
              <div className={styles.channelItem}>
                <div className={styles.channelIcon} aria-hidden="true">
                  <MapPin aria-hidden="true" size={20} className="text-brand-dark" />
                </div>
                <span>Niterói — RJ, Brasil</span>
              </div>
            </div>
          </div>

          <div className={styles.messageFormWrapper}>
            <h3 className={styles.formTitle}>Envie uma mensagem</h3>

            {status === "success" ? (
              <div className={styles.feedbackSuccess} role="status" aria-live="polite">
                <CheckCircle size={40} aria-hidden="true" />
                <p className={styles.feedbackTitle}>Mensagem enviada!</p>
                <p className={styles.feedbackText}>
                  Recebemos o seu contato e responderemos em breve no e-mail informado.
                </p>
                <button
                  type="button"
                  className={styles.feedbackReset}
                  onClick={() => setStatus("idle")}
                >
                  Enviar outra mensagem
                </button>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit} noValidate>
                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel} htmlFor={nameId}>Nome completo *</label>
                  <input
                    id={nameId}
                    name="name"
                    type="text"
                    className={styles.input}
                    placeholder="Seu nome"
                    required
                    aria-required="true"
                    disabled={status === "loading"}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel} htmlFor={emailId}>E-mail *</label>
                  <input
                    id={emailId}
                    name="email"
                    type="email"
                    className={styles.input}
                    placeholder="seu@email.com"
                    required
                    aria-required="true"
                    disabled={status === "loading"}
                  />
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel} htmlFor={interestId}>Assunto *</label>
                  <select
                    id={interestId}
                    name="interest"
                    className={styles.input}
                    required
                    aria-required="true"
                    disabled={status === "loading"}
                    defaultValue=""
                  >
                    <option value="" disabled>Selecione um assunto</option>
                    <option value="participar">Quero participar</option>
                    <option value="voluntario">Quero ser voluntário(a)</option>
                    <option value="apoiar">Quero apoiar o projeto</option>
                    <option value="duvida">Tenho uma dúvida</option>
                  </select>
                </div>

                <div className={styles.inputGroup}>
                  <label className={styles.inputLabel} htmlFor={messageId}>Mensagem *</label>
                  <textarea
                    id={messageId}
                    name="message"
                    className={styles.textarea}
                    placeholder="Conte-nos um pouco sobre você e como podemos ajudar..."
                    rows={4}
                    required
                    aria-required="true"
                    disabled={status === "loading"}
                  />
                </div>

                {status === "error" && (
                  <div className={styles.feedbackError} role="alert" aria-live="assertive">
                    <AlertCircle size={18} aria-hidden="true" />
                    <span>{errorMessage}</span>
                  </div>
                )}

                <Button
                  type="submit"
                  variant="primary"
                  fullWidth
                  disabled={status === "loading"}
                >
                  {status === "loading" ? (
                    <>
                      <Loader size={16} aria-hidden="true" className={styles.spinner} />
                      Enviando…
                    </>
                  ) : (
                    "Enviar Mensagem"
                  )}
                </Button>
              </form>
            )}
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
