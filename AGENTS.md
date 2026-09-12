# Regras e Contextos do PCD em Movimento

Bem-vindo ao desenvolvimento do **PCD em Movimento**! Ao trabalhar neste projeto, siga rigorosamente as seguintes diretrizes arquiteturais e de fluxo de trabalho que já foram estabelecidas.

## 1. Arquitetura Limpa (Clean Architecture)
A aplicação está dividida em camadas estritas para garantir escalabilidade e manutenção:

- **`app/core/`**: O coração da aplicação. Não depende de nenhuma biblioteca externa (nem do React).
  - `domain/entities/`: Tipos e interfaces de domínio puras.
  - `application/use-cases/`: Regras de negócio.
  - `application/repositories/`: Interfaces (contratos) para acesso a dados externos.
- **`app/infrastructure/`**: Onde as dependências externas moram.
  - `repositories/`: Implementações concretas (ex: `MockContactRepository`, `StaticTestimonialRepository`).
- **`app/components/`**: A camada de apresentação (UI). É a única camada que possui código React (`.tsx`) e CSS.

## 2. Organização da UI (`app/components/`)
Os componentes React NÃO devem ficar soltos. Eles estão organizados dentro de três subdiretórios em `app/components/`:
- **`ui/`**: Componentes atômicos, genéricos e altamente reutilizáveis (ex: `Button`, `Section`, `SectionTitle`). Não possuem regras de negócio.
- **`layout/`**: Componentes estruturais e fixos da página (ex: `Header`, `Footer`).
- **`features/`**: Componentes que representam funcionalidades completas do negócio e injetam os casos de uso ou repositórios (ex: `Contact`, `Hero`, `Testimonials`).

## 3. Estrutura Interna dos Componentes
Todo componente deve ter sua própria pasta com a seguinte estrutura estrita:
```text
NomeDoComponente/
 ├── index.tsx              # A lógica React isolada e limpa
 └── styles.module.css      # As definições de estilo do componente
```
- **NUNCA** use strings gigantes utilitárias do Tailwind dentro do arquivo `.tsx`. O `className` deve ser semântico (ex: `className={styles.sidebar}`).
- **Obrigatório no CSS Module**: Todo arquivo `styles.module.css` DEVE ser escrito utilizando CSS puro (Vanilla CSS), sem o uso de diretivas do Tailwind como `@apply`. O código deve ser descritivo, de fácil manutenção e legível para qualquer desenvolvedor.

Exemplo de CSS Module esperado:
```css
.card {
  width: 100%;
  display: flex;
  flex-direction: column;
  background-color: #ffffff;
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 4px 8px rgba(0,0,0,0.1);
}
```

## 4. Fluxo de Trabalho e Versionamento (Git Workflow)
Sempre que for implementar uma nova funcionalidade ou refatoração:
1. **Crie uma branch específica** seguindo o padrão semântico: `feat/<nome>`, `fix/<nome>`, `refactor/<nome>`.
2. **Implemente o código** seguindo as regras de arquitetura acima.
3. Garanta que o projeto passa no typescript e build (`pnpm typecheck && pnpm build`).
4. **Faça commits semânticos** (ex: `feat(ui): adiciona seção de projetos`).
5. **Faça o checkout para a `main`** e aplique o merge da sua branch.
6. **Empurre (Push)** imediatamente para a `main`.
