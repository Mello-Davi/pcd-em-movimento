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

        <div className={styles.grid}>
          {/* Participante */}
          <div className={styles.cardBlue}>
            <div className="mb-6 text-3xl">🛶</div>
            <p className={styles.cardTag}>PESSOA COM DEFICIÊNCIA</p>
            <h3 className={styles.cardTitle}>Participante</h3>
            <p className={styles.cardDesc}>
              Venha remar! O projeto é gratuito para pessoas com deficiência. Basta se inscrever, passar pela avaliação inicial e aparecer no sábado.
            </p>
            <ul className={styles.list}>
              <li><CheckCircle2 size={18} className="text-blue-300 shrink-0" /> Gratuito para PCDs</li>
              <li><CheckCircle2 size={18} className="text-blue-300 shrink-0" /> Equipamento fornecido</li>
              <li><CheckCircle2 size={18} className="text-blue-300 shrink-0" /> Acompanhamento individual</li>
              <li><CheckCircle2 size={18} className="text-blue-300 shrink-0" /> Sem experiência prévia</li>
            </ul>
            <div className="mt-auto pt-8">
              <Button variant="outline" fullWidth>Quero Participar</Button>
            </div>
          </div>

          {/* Voluntário */}
          <div className={styles.cardGreen}>
            <div className="mb-6 text-3xl">🤝</div>
            <p className={styles.cardTag}>APOIE O PROJETO</p>
            <h3 className={styles.cardTitle}>Voluntário</h3>
            <p className={styles.cardDesc}>
              Seja instrutor, apoio logístico, comunicação ou suporte às famílias. Todo perfil é bem-vindo — o importante é ter vontade de ajudar.
            </p>
            <ul className={styles.list}>
              <li><CheckCircle2 size={18} className="text-green-300 shrink-0" /> Treinamento incluído</li>
              <li><CheckCircle2 size={18} className="text-green-300 shrink-0" /> Fins de semana</li>
              <li><CheckCircle2 size={18} className="text-green-300 shrink-0" /> Certificado de voluntariado</li>
              <li><CheckCircle2 size={18} className="text-green-300 shrink-0" /> Comunidade incrível</li>
            </ul>
            <div className="mt-auto pt-8">
              <Button variant="outline" fullWidth>Ser Voluntário</Button>
            </div>
          </div>

          {/* Apoiador */}
          <div className={styles.cardDark}>
            <div className="mb-6 text-3xl">💚</div>
            <p className={styles.cardTag}>EMPRESA OU PESSOA</p>
            <h3 className={styles.cardTitle}>Apoiador</h3>
            <p className={styles.cardDesc}>
              Apoie financeiramente e ajude a expandir o projeto para mais cidades e mais participantes. Cada contribuição gera impacto real.
            </p>
            <ul className={styles.list}>
              <li><CheckCircle2 size={18} className="text-blue-300 shrink-0" /> Pessoas Físicas e Jurídicas</li>
              <li><CheckCircle2 size={18} className="text-blue-300 shrink-0" /> Relatórios de impacto</li>
              <li><CheckCircle2 size={18} className="text-blue-300 shrink-0" /> Visibilidade da marca</li>
              <li><CheckCircle2 size={18} className="text-blue-300 shrink-0" /> Dedução fiscal (MEI/PJ)</li>
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
