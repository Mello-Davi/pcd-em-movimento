# PCD em Movimento - Website Institucional

Este repositório contém o código-fonte do website institucional da organização "PCD em Movimento". O projeto tem como objetivo divulgar o trabalho social realizado pela organização, que promove a inclusão social de pessoas com deficiência por meio da prática da canoa havaiana adaptada em Niterói, RJ.

## Visão Geral do Projeto

A aplicação foi desenvolvida como uma Landing Page moderna, focada em performance, acessibilidade universal (WCAG) e arquitetura de software de alta manutenção.

### Principais Funcionalidades e Acessibilidade (a11y)
- Suporte integral à navegação via teclado (Skip Links e outlines de alto contraste).
- Otimização para leitores de tela com textos alternativos detalhados, atributos ARIA dinâmicos e isolamento de elementos puramente decorativos.
- Comportamentos visuais adaptativos que respeitam as preferências do usuário (ex: desativação de animações via `prefers-reduced-motion`).
- Componentes interativos nativos e leves, como carrosséis construídos com CSS Scroll Snap, eliminando dependências externas pesadas.

## Tecnologias e Ferramentas

O projeto utiliza tecnologias modernas de ecossistema React, restringindo ferramentas de terceiros sempre que as alternativas nativas são mais performáticas e escaláveis:

- React 19
- React Router v8 (Configurado via Vite)
- TypeScript (Strict mode habilitado)
- CSS Modules (Vanilla CSS Puro)
- Node.js & PNPM

## Arquitetura Limpa (Clean Architecture)

A organização do projeto segue estritamente os princípios da Clean Architecture para garantir o desacoplamento da interface em relação às regras de negócios e ferramentas externas. O diretório base do código-fonte é `app/`.

### Estrutura de Diretórios

- `app/core/`
  Contém o coração da aplicação. Totalmente agnóstico a bibliotecas visuais (sem código React).
  - `domain/entities/`: Interfaces e tipos de domínio puro.
  - `application/use-cases/`: Lógica de aplicação e regras de negócio.
  - `application/repositories/`: Interfaces e contratos para as camadas externas.

- `app/infrastructure/`
  Implementações concretas de acesso a dados e adaptadores externos (ex: APIs, clientes HTTP, mocks).

- `app/components/`
  Camada de apresentação estruturada. Apenas esta camada contém arquivos React (`.tsx`) e estilização (`.css`).
  - `ui/`: Componentes base reutilizáveis (botões, seções estruturais).
  - `layout/`: Partes fixas da interface (Cabeçalho, Rodapé).
  - `features/`: Componentes complexos que refletem o domínio (Contato, Quem Somos, Depoimentos, etc).
  - `hooks/`: Lógica de interface compartilhada (ex: observadores de scroll).

## Diretrizes de Codificação e Estilos

Este projeto aboliu o uso de strings utilitárias do Tailwind CSS na camada de componentes para garantir a previsibilidade e a leitura nativa do código.

1. **CSS Modules Restritos:**
   Todo componente React deve ter seu próprio arquivo `styles.module.css`. O uso da diretiva `@apply` do Tailwind é terminantemente proibido.
2. **Nomenclatura Semântica (BEM-like):**
   Os seletores de classe devem refletir diretamente o propósito ou domínio do conteúdo (ex: `.valueCardAcolhimento`, `.disabilityTitle`), rejeitando nomes focados em estilo (ex: `.cardDark`, `.textBlue`).
3. **Isolamento do Componente:**
   Todo componente obrigatoriamente segue a árvore: `PastaDoComponente/index.tsx` e `PastaDoComponente/styles.module.css`.

## Instruções de Execução

Certifique-se de possuir o Node.js v20+ e o `pnpm` instalados no seu ambiente.

1. Instalar as dependências:
   ```bash
   pnpm install
   ```

2. Executar o servidor local de desenvolvimento:
   ```bash
   pnpm run dev
   ```

3. Realizar validação estática (Typecheck e Build):
   ```bash
   pnpm run typecheck && pnpm run build
   ```

4. Visualizar o modo de produção:
   ```bash
   pnpm run start
   ```
