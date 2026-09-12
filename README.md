# Template de Projeto React

Este repositório é um template inicial configurado para o desenvolvimento de aplicações web modernas e escaláveis. Ele integra ferramentas essenciais para roteamento, estilização, gerenciamento de estado e validação.

## Arquitetura e Tecnologias

Este projeto foi construído utilizando:
- React 19
- React Router v8
- Vite
- TypeScript
- Tailwind CSS v4
- Zustand (Gerenciamento de Estado Global)
- React Hook Form + Zod (Validação de Formulários)
- Axios (Cliente HTTP)
- ESLint (Qualidade de Código)

## Estrutura do Projeto

O código-fonte está organizado dentro do diretório `app/` para manter a separação de responsabilidades:

- `app/routes/`
  Contém as definições de rotas da aplicação e os componentes mapeados diretamente para as URLs. A lógica para busca de dados (loaders) e mutações (actions) específicas de uma rota devem residir aqui.

- `app/pages/`
  Contém composições completas de interface. Utilize este diretório para construir visualizações complexas, mantendo os arquivos dentro de `app/routes/` focados apenas em roteamento e agregação de dados.

- `app/components/`
  Contém componentes de interface modulares, genéricos e reutilizáveis (ex.: botões, inputs, modais) que podem ser compartilhados entre diferentes páginas e rotas.

- `app/hooks/`
  Contém hooks customizados do React para lógicas compartilhadas, abstraindo efeitos colaterais ou comportamentos complexos para fora dos componentes.

- `app/stores/`
  Contém as configurações de estado do Zustand. Estados globais devem ser separados logicamente em arquivos modulares dentro deste diretório.

- `app/assets/`
  Contém arquivos estáticos, como imagens, ícones e fontes locais.

## Executando o Projeto

Certifique-se de ter o Node.js e o `pnpm` instalados.

1. **Instalar dependências:**
   ```bash
   pnpm install
   ```

2. **Iniciar o servidor de desenvolvimento:**
   ```bash
   pnpm run dev
   ```

3. **Gerar a build de produção:**
   ```bash
   pnpm run build
   ```

4. **Visualizar a build de produção:**
   ```bash
   pnpm run start
   ```

5. **Verificação de Tipos e Linting:**
   Para verificar erros do TypeScript e regras do ESLint:
   ```bash
   pnpm run typecheck
   
   pnpm run lint
   ```

## Diretrizes de Desenvolvimento

- **Formulários:** Construa formulários utilizando `react-hook-form` e realize a validação de dados utilizando `zod`.
- **Gerenciamento de Estado:** Mantenha os componentes React majoritariamente sem estado próprio e gerencie os estados globais dentro de `app/stores/` utilizando o `zustand`.
- **Estilização:** Utilize as classes utilitárias do Tailwind CSS, evitando criar arquivos CSS customizados sempre que possível.
- **Requisições:** Utilize `axios` para requisições HTTP padrão.
