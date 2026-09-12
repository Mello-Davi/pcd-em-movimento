# Lista todos os comandos disponíveis por padrão se você digitar apenas "just"
default:
    @just --list

# Inicia o servidor de desenvolvimento
dev:
    pnpm dev

# Instala as dependências do projeto
install:
    pnpm install

# Faz o build de produção do projeto
build:
    pnpm build

# Inicia o servidor de produção (lembre-se de rodar o build antes)
start:
    pnpm start

# Roda o linter para encontrar problemas no código
lint:
    pnpm lint

# Checa os tipos do TypeScript
typecheck:
    pnpm typecheck
