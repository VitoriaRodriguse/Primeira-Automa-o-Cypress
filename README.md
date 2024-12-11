# Automação de Testes com Cypress 🤖

Este repositório contém minha primeira automação de testes utilizando o **Cypress**. 

O **Cypress** é uma ferramenta moderna de automação de testes end-to-end (E2E), projetada especificamente para aplicações web. Ele se destaca pela sua simplicidade, rapidez e integração com o ambiente de desenvolvimento, permitindo que os testadores escrevam, executem e depurem testes com facilidade.  

Nesse projeto, focado no Front-end, utilizei o Cypress para automatizar os testes de um formulário de Feedback.

## Instalação do Cypress 🔧

### **Pré-requisitos**

1-Certifique-se de que o [Node.js](https://nodejs.org/) está instalado na sua máquina, com o gerenciador de pacotes npm junto.

2-Inicialize um projeto Node.js
Caso ainda não tenha um arquivo `package.json` no seu projeto, inicie-o com o comando:

```bash
npm init -y
```
### **Instalação**
Execute o comando abaixo para instalar o Cypress como uma dependência de desenvolvimento:
```bash
npm install cypress --save-dev
```
### **Abrindo o Cypress**
Após a instalação, você pode abrir o Cypress com o seguinte comando:
```bash
npx cypress open
```
Esse comando abrirá a interface gráfica do Cypress, onde podemos criar, editar e executar os testes. Na primeira execução, o Cypress criará automaticamente uma estrutura de diretórios no projeto.

## Gerenciamento de Dados com Faker 🐼

Para gerar dados fictícios de forma automatizada e confiável, utilizei a biblioteca [**Faker**](https://www.npmjs.com/package/@faker-js/faker). Essa ferramenta cria informações aleatórias, como nomes, e-mails, endereços e outros dados necessários para o preenchimento de formulários durante os testes.  

### Instalação do Faker
Caso deseje utilizar o Faker no seu projeto, basta instalá-lo com o seguinte comando:  

```bash
npm install --save-dev @faker-js/faker
```
## Detalhes do projeto 🔍

### Localização dos testes
Os testes estão localizados na pasta: cypress/e2e/Enviar Formulario.

### Comandos personalizados
Para otimizar a execução dos testes, utilizei a funcionalidade de **comandos personalizados do Cypress**. Esses comandos estão definidos na pasta: cypress/support/commands.js.

No arquivo, foi utilizado o método `Cypress.Commands.add`

Esse comando criou uma função que realiza o envio dos formulários nos testes. Isso permite reaproveitar o código em diferentes cenários de teste, garantindo maior organização e eficiência.

### Versão utilizada
No arquivo package.json, é possível encontrar a versão do Cypress e do Faker utilizadas no projeto. 

## Documentação do Cypress 📃
[CypressDocs](https://docs.cypress.io/app/get-started/why-cypress)

