# calcReajuste

Este repositório contém um projeto React utilizando Redux para calcular o reajuste de contrato com base nos índices IPCA de duas datas fornecidas pelo usuário.

## Descrição do Projeto

O projeto `calcReajuste` é uma aplicação simples desenvolvida em React, que utiliza Redux para gerenciar o estado da aplicação. Ele permite calcular o reajuste de contrato com base nos seguintes passos:

1. O usuário informa o valor do índice IPCA na data inicial (data 0) e na data de referência (data N).
2. A aplicação calcula o percentual de reajuste entre esses dois índices.
3. Exibe o valor percentual de reajuste calculado.

### Funcionalidades

- **Entrada de Dados**: O usuário insere os valores dos índices IPCA para data 0 e data N.
- **Cálculo de Reajuste**: A aplicação calcula o percentual de reajuste com base nos índices fornecidos.
- **Exibição de Resultado**: Mostra o percentual de reajuste calculado na interface.

### Tecnologias Utilizadas

- **React**: Biblioteca JavaScript para construção de interfaces de usuário.
- **Redux**: Biblioteca de gerenciamento de estado para JavaScript/React.
- **Redux Toolkit**: Pacote oficial recomendado para uso com Redux, que inclui `createSlice` para definição de reducers.

## Configuração do Ambiente de Desenvolvimento

### Pré-requisitos

- Node.js (versão recomendada)
- npm ou Yarn

### Executando o Projeto

1. Clone o repositório para sua máquina local.
2. Instale as dependências utilizando npm ou Yarn:
```
npm install
```
ou
```
yarn install
```
3. Inicie o servidor de desenvolvimento:
```
npm start
```
ou
```
yarn start
```
4. Acesse a aplicação em `http://localhost:3000` no navegador.

## Estrutura do Redux

O projeto utiliza Redux para gerenciar o estado da aplicação, com a seguinte estrutura básica:

- **Store**: Configurada em `src/app/store.ts`, utilizando `configureStore` do Redux Toolkit.
- **Slice**: Definido em `src/features/calcular/calcularSlice.ts`, contendo actions e reducers para gerenciar o estado de cálculo de reajuste.

## Notas Adicionais

Este projeto foi desenvolvido como um exercício para aprender os conceitos básicos de Redux e integração com React. Contribuições e sugestões são bem-vindas!

## Licença

Este projeto está licenciado sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.

---

Qualquer dúvida ou problema, sinta-se à vontade para abrir uma issue neste repositório.
