<div align="center">
  <h1>Gerenciador de Funcionários </h1>

  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=java,spring,mysql,react,tailwind,maven,vscode" />
  </a>

  <p align="center">
    <b>Sistema Full-stack para controle de funcionários</b>
    <br />
    Aplicação completa com API RESTful em Spring Boot e interface responsiva em React.
  </p>
</div>

<video src="https://github.com/user-attachments/assets/2c983f97-6e1b-4fea-bb75-a3a185838db6" width="100%" controls></video>



## 💻 Sobre o projeto

Este projeto foi desenvolvido para praticar a integração entre um back-end robusto e um front-end moderno. O foco principal foi a implementação de operações **CRUD** (Create, Read, Update, Delete) e a organização de um fluxo de dados eficiente entre o banco de dados MySQL e a interface do usuário.

### Principais funcionalidades:
* **Cadastro de Funcionários:** Registro completo de dados no banco de dados.
* **Listagem em Tempo Real:** Visualização dinâmica dos colaboradores cadastrados.
* **Gerenciamento:** Edição de informações e remoção de registros de forma simplificada.
* **Interface Responsiva:** Estilização com Tailwind CSS para adaptação em qualquer tela.



## 🚀 Como rodar o projeto

O projeto está organizado em um **Monorepo**, dividindo as responsabilidades em pastas distintas para Back-end e Front-end. Certifique-se de que você tenha uma tabela ems no seu MySQL

### 📋 Pré-requisitos
* Java 17 ou superior
* Maven
* Node.js (v18+) & NPM
* MySQL instalado e rodando

### 🔧 Instalação e Configuração

**1. Clonar o repositório:**
```bash
git clone https://github.com/renanmerlotti/ems-fullstack.git
cd ems-fullstack
```

**2. Configuração do Banco de Dados (Back-end):**
O projeto utiliza a variável `${DB_PASSWORD}` para proteger a senha do banco. Você pode configurá-la de duas formas:

* **Pela IDE (Recomendado):**
  - **IntelliJ:** Vá em `Run` > `Edit Configurations`, selecione o projeto e adicione em `Environment Variables`: `DB_PASSWORD=sua_senha`.
  - **VS Code:** No arquivo `launch.json` ou nas configurações de execução, adicione `"env": {"DB_PASSWORD": "sua_senha"}`.

* **Direto no código:** Se preferir, altere o valor em `backend/src/main/resources/application.properties`.

**3. Executar o Back-end (Spring Boot):**

Para rodar o servidor, você deve entrar na pasta específica do back-end. Certifique-se de que o MySQL está ativo e a variável de ambiente configurada.

* Navegue até a pasta:
    ```bash
    cd backend
    ```
* Execute a aplicação usando o Maven:
    ```bash
    mvn spring-boot:run
    ```
* O servidor estará disponível em: `http://localhost:8080`

**4. Executar o Front-end (React):**

Com o Back-end já em execução, abra um **novo terminal** para iniciar a interface do usuário.

* Navegue até a pasta do front-end:
    ```bash
    cd frontend
    ```
* Instale as dependências do projeto (necessário apenas na primeira vez):
    ```bash
    npm install
    ```
* Inicie a aplicação:
    ```bash
    npm run dev
    ```
* A interface abrirá por padrão em: `http://localhost:3000`


## Contato

Renan Merlotti - [https://www.linkedin.com/in/renan-merlotti/](https://www.linkedin.com/in/renan-merlotti/) - renanmerlotti@gmail.com

