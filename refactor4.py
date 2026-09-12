import os

def write_file(path, content):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, 'w') as f:
        f.write(content.strip() + "\n")

# --- TESTIMONIALS ---
write_file("app/components/features/Testimonials/index.tsx", """
import { Section } from "../../ui/Section";
import { SectionTitle } from "../../ui/SectionTitle";
import { Star } from "lucide-react";
import styles from "./styles.module.css";

export function Testimonials() {
  const testimonials = [
    {
      text: "Quando entrei na canoa pela primeira vez, senti o vento no rosto e ouvi o barulho das águas. Foi a primeira vez em anos que me senti completamente livre. A equipe me fez sentir em casa desde o primeiro momento.",
      author: "Mariana Costa",
      role: "Participante — Deficiência Visual",
      initials: "MC",
      color: "bg-blue-600"
    },
    {
      text: "Eu nunca imaginei que praticaria esporte aquático. O projeto não só mudou minha condição física — mudou minha autoestima. Hoje sou um remador de verdade, e isso me dá orgulho todos os dias.",
      author: "Roberto Alves",
      role: "Participante — Cadeirante",
      initials: "RA",
      color: "bg-brand-green"
    },
    {
      text: "Ser voluntária no PCD em Movimento é a experiência mais enriquecedora da minha vida. Ver a transformação no rosto das pessoas quando chegam ao oceano pela primeira vez é algo que não tem preço.",
      author: "Cláudia Mendes",
      role: "Voluntária há 3 anos",
      initials: "CM",
      color: "bg-blue-900"
    }
  ];

  return (
    <Section id="depoimentos" theme="dark">
      <div className={styles.container}>
        <SectionTitle 
          tag="Depoimentos" 
          title="Histórias que nos movem" 
          theme="light" 
          align="center" 
        />
        <p className={styles.subtitle}>As palavras de quem viveu a transformação</p>

        <div className={styles.grid}>
          {testimonials.map((t, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => <Star key={i} size={16} className="fill-brand-green text-brand-green" />)}
              </div>
              <p className={styles.text}>"{t.text}"</p>
              
              <div className={styles.authorContainer}>
                <div className={`${styles.avatar} ${t.color}`}>{t.initials}</div>
                <div>
                  <h4 className={styles.authorName}>{t.author}</h4>
                  <p className={styles.authorRole}>{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}
""")

write_file("app/components/features/Testimonials/styles.module.css", """
@reference "tailwindcss";

.container { @apply container mx-auto px-4; }
.subtitle { @apply text-center text-blue-200 mb-16 -mt-6 text-lg; }

.grid { @apply grid grid-cols-1 md:grid-cols-3 gap-6; }
.card { @apply bg-[#15273b] border border-[#1e3a5f] rounded-2xl p-8 flex flex-col; }

.stars { @apply flex gap-1 mb-6; }
.text { @apply text-blue-50 leading-relaxed flex-grow mb-10; }

.authorContainer { @apply flex items-center gap-4 pt-6 border-t border-[#1e3a5f]; }
.avatar { @apply w-12 h-12 rounded-full flex items-center justify-center text-white font-bold shrink-0; }
.authorName { @apply font-bold text-white text-sm mb-1; }
.authorRole { @apply text-blue-300 text-xs; }
""")

# --- PARTICIPATE ---
write_file("app/components/features/Participate/index.tsx", """
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
""")

write_file("app/components/features/Participate/styles.module.css", """
@reference "tailwindcss";

.container { @apply container mx-auto px-4; }
.header { @apply text-center mb-16 flex flex-col items-center; }
.tag { @apply bg-blue-100 text-blue-800 font-bold text-sm tracking-wider uppercase px-4 py-1.5 rounded-full mb-6; }
.title { @apply font-serif text-4xl md:text-5xl font-bold text-brand-dark mb-4; }
.subtitle { @apply text-gray-600 text-lg max-w-2xl; }

.grid { @apply grid grid-cols-1 md:grid-cols-3 gap-8; }

.cardBlue { @apply bg-[#2c75b8] text-white rounded-2xl p-8 flex flex-col shadow-lg; }
.cardGreen { @apply bg-brand-green text-white rounded-2xl p-8 flex flex-col shadow-lg; }
.cardDark { @apply bg-brand-dark text-white rounded-2xl p-8 flex flex-col shadow-lg; }

.cardTag { @apply text-xs font-bold tracking-widest opacity-80 mb-2 uppercase; }
.cardTitle { @apply font-serif text-3xl font-bold mb-4; }
.cardDesc { @apply text-white/90 text-sm leading-relaxed mb-8; }

.list { @apply flex flex-col gap-3; }
.list li { @apply flex items-center gap-3 text-sm font-medium text-white/90; }
""")

# --- CONTACT ---
write_file("app/components/features/Contact/index.tsx", """
import { Section } from "../../ui/Section";
import { Mail, Phone, MapPin } from "lucide-react";
import styles from "./styles.module.css";
import { Button } from "../../ui/Button";

export function Contact() {
  return (
    <Section id="contato" theme="light" className={styles.sectionWithWave}>
      <div className={styles.container}>
        <div className={styles.grid}>
          <div className={styles.infoColumn}>
            <span className={styles.tag}>Contato</span>
            <h2 className={styles.title}>Vamos conversar?</h2>
            <p className={styles.description}>
              Ficou com alguma dúvida ou quer saber mais detalhes sobre o projeto? Mande uma mensagem para a gente. Respondemos em até 24 horas úteis.
            </p>
            
            <a href="https://wa.me/5511999999999" target="_blank" rel="noreferrer" className={styles.whatsappBtn}>
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21"/><path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1"/></svg>
              Falar pelo WhatsApp
            </a>

            <div className={styles.contactList}>
              <div className={styles.contactItem}>
                <div className={styles.iconBox}><Mail size={20} className="text-brand-dark" /></div>
                <span>contato@pcdemmovimento.org.br</span>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.iconBox}><Phone size={20} className="text-brand-dark" /></div>
                <span>(11) 99999-9999</span>
              </div>
              <div className={styles.contactItem}>
                <div className={styles.iconBox}><MapPin size={20} className="text-brand-dark" /></div>
                <span>São Paulo — SP, Brasil</span>
              </div>
            </div>
          </div>

          <div className={styles.formContainer}>
            <h3 className={styles.formTitle}>Envie uma mensagem</h3>
            <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
              <div className={styles.formGroup}>
                <label className={styles.label}>Nome completo *</label>
                <input type="text" className={styles.input} placeholder="Seu nome" required />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>E-mail *</label>
                <input type="email" className={styles.input} placeholder="seu@email.com" required />
              </div>
              <div className={styles.formGroup}>
                <label className={styles.label}>Mensagem *</label>
                <textarea className={styles.textarea} placeholder="Conte-nos um pouco sobre você e como podemos ajudar..." rows={4} required></textarea>
              </div>
              <Button type="submit" variant="primary" fullWidth>Enviar Mensagem</Button>
            </form>
          </div>
        </div>
      </div>
      
      <div className={styles.waveDivider}>
        <svg viewBox="0 0 1440 120" preserveAspectRatio="none" className="w-full h-full">
          <path d="M0,64L80,69.3C160,75,320,85,480,80C640,75,800,53,960,42.7C1120,32,1280,32,1360,32L1440,32L1440,120L1360,120C1280,120,1120,120,960,120C800,120,640,120,480,120C320,120,160,120,80,120L0,120Z" fill="#122132" />
        </svg>
      </div>
    </Section>
  );
}
""")

write_file("app/components/features/Contact/styles.module.css", """
@reference "tailwindcss";

.sectionWithWave { @apply relative pb-40; }
.container { @apply container mx-auto px-4 relative z-10; }
.grid { @apply grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-start; }

.infoColumn { @apply flex flex-col items-start; }
.tag { @apply bg-green-100 text-green-800 font-bold text-sm tracking-wider uppercase px-4 py-1.5 rounded-full mb-6; }
.title { @apply font-serif text-4xl md:text-5xl font-bold text-brand-dark mb-6; }
.description { @apply text-gray-700 leading-relaxed mb-10; }

.whatsappBtn { @apply inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold py-4 px-8 rounded-xl transition-colors mb-12 shadow-lg shadow-green-200; }

.contactList { @apply flex flex-col gap-6; }
.contactItem { @apply flex items-center gap-4 text-gray-700 font-medium; }
.iconBox { @apply bg-blue-100 p-3 rounded-xl shrink-0; }

.formContainer { @apply bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-gray-100 w-full; }
.formTitle { @apply font-serif text-2xl font-bold text-brand-dark mb-8; }
.form { @apply flex flex-col gap-6; }
.formGroup { @apply flex flex-col gap-2; }
.label { @apply font-bold text-sm text-brand-dark; }
.input { @apply border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors w-full; }
.textarea { @apply border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors w-full resize-none; }

.waveDivider { @apply absolute bottom-0 left-0 w-full h-16 md:h-24 lg:h-32 z-0 overflow-hidden; }
""")

