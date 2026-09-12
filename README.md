<p align="center">
  <img src="public/image.png" alt="Logotipo PCD em Movimento" width="150" />
</p>

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

## Diretrizes de Codificação e Estilos

Este projeto aboliu o uso de strings utilitárias do Tailwind CSS na camada de componentes para garantir a previsibilidade e a leitura nativa do código.

1. **CSS Modules Restritos:**
   Todo componente React deve ter seu próprio arquivo `styles.module.css`. O uso da diretiva `@apply` do Tailwind é terminantemente proibido.
2. **Nomenclatura Semântica (BEM-like):**
   Os seletores de classe devem refletir diretamente o propósito ou domínio do conteúdo (ex: `.valueCardAcolhimento`, `.disabilityTitle`), rejeitando nomes focados em estilo (ex: `.cardDark`, `.textBlue`).
3. **Isolamento do Componente:**
   Todo componente obrigatoriamente segue a árvore: `PastaDoComponente/index.tsx` e `PastaDoComponente/styles.module.css`.

## Créditos

Desenvolvido por **Davi Rodrigues** (GitHub: [Mello-Davi](https://github.com/Mello-Davi)).

*Powered by AI*
