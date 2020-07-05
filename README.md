# Eternal Tree
Esse projeto consiste em um sistema pwa(Progressive Web App) que tem como objetivo democratizar e estimular a leitura através da gamificação, utilizando tecnologias da web, oferencendo uso online e offline, conteúdo diversificado de leitura e desafios.

## Tecnologias
- Node >= v10.18.1
- Yarn >= v1.21.1
- NPM >= 6.13.4
- Git

## Frameworks
- Vue.js >= 2.6.11
- Quasar >= 1.12.8

## Como executar

> Comandos executados em sistema baseado em Unix.
> Necessário instalar as ferramentas citadas no item de tecnologias.

a) Clonar o repositório
- `git clone https://github.com/rof20004/eternal-tree.git`

b) Instalar as dependências
- `cd eternal-tree`
- `yarn`

c) Subir a aplicação em modo de desenvolvimento
- `quasar dev`

d) Acessar através do seu browser o seguinte endereço
- `http://localhost:8080`

e) Gerar build para produção
- `quasar build -m pwa`

f) Copiar os arquivos que se encontram dentro da pasta abaixo para seu servidor web
- `dist/pwa`
