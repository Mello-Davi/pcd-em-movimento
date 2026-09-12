import { Section } from "../../ui/Section";
import { CheckCircle2 } from "lucide-react";
import styles from "./styles.module.css";
import { Button } from "../../ui/Button";

export function Participate() {
  return (
    <Section id="participar" theme="white">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className={styles.tag}>Como Participar</span>
          <h2 className={styles.title}>Faça parte dessa história</h2>
          <p className={styles.subtitle}>Há um lugar para todo mundo nesse barco. Escolha como você quer contribuir.</p>
        </div>

        <div className={styles.rolesList}>
          {/* Participante */}
          <div className={`${styles.roleCard} ${styles.roleCardParticipant}`}>
            <div className="mb-6 text-3xl">🛶</div>
            <p className={styles.roleCategory}>PESSOA COM DEFICIÊNCIA</p>
            <h3 className={styles.roleName}>Participante</h3>
            <p className={styles.roleDescription}>
              Venha remar! O projeto é gratuito para pessoas com deficiência. Basta se inscrever, passar pela avaliação inicial e aparecer no sábado.
            </p>
            <ul className={styles.benefitsList}>
              <li><CheckCircle2 aria-hidden="true" size={18} className="text-blue-300 shrink-0" /> Gratuito para PCDs</li>
              <li><CheckCircle2 aria-hidden="true" size={18} className="text-blue-300 shrink-0" /> Equipamento fornecido</li>
              <li><CheckCircle2 aria-hidden="true" size={18} className="text-blue-300 shrink-0" /> Acompanhamento individual</li>
              <li><CheckCircle2 aria-hidden="true" size={18} className="text-blue-300 shrink-0" /> Sem experiência prévia</li>
            </ul>
            <div className="mt-auto pt-8">
              <Button variant="outline" fullWidth>Quero Participar</Button>
            </div>
          </div>

          {/* Voluntário */}
          <div className={`${styles.roleCard} ${styles.roleCardVolunteer}`}>
            <div className="mb-6 text-3xl">🤝</div>
            <p className={styles.roleCategory}>APOIE O PROJETO</p>
            <h3 className={styles.roleName}>Voluntário</h3>
            <p className={styles.roleDescription}>
              Seja instrutor, apoio logístico, comunicação ou suporte às famílias. Todo perfil é bem-vindo — o importante é ter vontade de ajudar.
            </p>
            <ul className={styles.benefitsList}>
              <li><CheckCircle2 aria-hidden="true" size={18} className="text-green-300 shrink-0" /> Treinamento incluído</li>
              <li><CheckCircle2 aria-hidden="true" size={18} className="text-green-300 shrink-0" /> Fins de semana</li>
              <li><CheckCircle2 aria-hidden="true" size={18} className="text-green-300 shrink-0" /> Certificado de voluntariado</li>
              <li><CheckCircle2 aria-hidden="true" size={18} className="text-green-300 shrink-0" /> Comunidade incrível</li>
            </ul>
            <div className="mt-auto pt-8">
              <Button variant="outline" fullWidth>Ser Voluntário</Button>
            </div>
          </div>

          {/* Apoiador */}
          <div className={`${styles.roleCard} ${styles.roleCardSupporter}`}>
            <div className="mb-6 text-3xl">💚</div>
            <p className={styles.roleCategory}>EMPRESA OU PESSOA</p>
            <h3 className={styles.roleName}>Apoiador</h3>
            <p className={styles.roleDescription}>
              Apoie financeiramente e ajude a expandir o projeto para mais cidades e mais participantes. Cada contribuição gera impacto real.
            </p>
            <ul className={styles.benefitsList}>
              <li><CheckCircle2 aria-hidden="true" size={18} className="text-blue-300 shrink-0" /> Pessoas Físicas e Jurídicas</li>
              <li><CheckCircle2 aria-hidden="true" size={18} className="text-blue-300 shrink-0" /> Relatórios de impacto</li>
              <li><CheckCircle2 aria-hidden="true" size={18} className="text-blue-300 shrink-0" /> Visibilidade da marca</li>
              <li><CheckCircle2 aria-hidden="true" size={18} className="text-blue-300 shrink-0" /> Dedução fiscal (MEI/PJ)</li>
            </ul>
            <div className="mt-auto pt-8">
              <Button variant="outline" fullWidth>Apoiar o Projeto</Button>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
