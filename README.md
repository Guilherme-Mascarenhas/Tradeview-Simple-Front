<h1 align = 'center'>
	TradeView - Simple - FrontEnd
</h1>

## Sobre o projeto

 **PROJETO ESTA SEPARADO FRONT / BACK**

-  **[tradeview-simple-back](https://github.com/nome_do_usuário/outro_repositorio)**

Para a contrução dessa parte do projeto foi utilizado uma conexão WebSocket, onde diferente da HTTP convencional é bidirecional, ou seja, ambas as partes (cliente/servidor), podem mandar informações sem a necessidade de uma requisição. Apos a conexão ser estabelecida esse caminho fica livre para troca de informações.
Nesse exemplo foi utilizado a Stream aberta da Binance para receber os indicadores das Criptomoedas da corretora em tempo real e com a ajuda do Apex Chats (biblioteca), criamos um grafico de velas em tempo real (atraso de segundos).

O Front-end se responsabiliza por apresentar o grafico e realizar a conexão webSocket
O Back-End é responsavel por fornecer dados para o grafico atraves da API da Binance, onde inicia o grafico.

Resumindo, atraves da API da Binance captamos o grafico de um periodo e moeda especifica que o backend nos fornece, apos preencher o grafico com as informações da API, nos conectamos ao Stream da Binance e atualizamos o grafico com os dados em tempo real com as ultimas informações enviadas pelo Stream

---

## Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

React
Bibliotecas
-   **Axios (Requisição HTTP)**
-   **React-use-websocket (Conexão Web Socket)** 
-   **Apex Charts (Grafico)**
---

## Como executar o projeto

### Pre-requisitos

Antes de começar, voce vai precisar ter instalado em sua maquina as seguintes ferramentas:

Nodejs
Editor de codigo (VsCode)
Git

### Rodando a Aplicacao

Apos instalado o NodeJs e glonado esse repositorio (Primeiramente voce precisa ter instalado o BackEnd).
0. Finalizar a instalação do projeto BackEnd dessa Aplicação
1. Ira acessar a pasta do projeto
2. na raiz do projeto ira abrir o terminal do seu editor
3. Executar o seguinte comando **npm install**
4. Apos instalar as Dependencias do projeto ele ja estara apto a ser executado
5. Execute o BackEnd como foi mostrado do ReadMe do repositorio.
6. No terminal (FrontEnd), voce ira executar o seguinte comando para inicializar o projeto **npm run dev**
