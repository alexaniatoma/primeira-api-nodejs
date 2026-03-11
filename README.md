# API de Cadastro de Usuários

![Node.js](https://img.shields.io/badge/Node.js-Backend-green)
![Express](https://img.shields.io/badge/Express-Framework-black)
![JavaScript](https://img.shields.io/badge/JavaScript-Language-yellow)
![Status](https://img.shields.io/badge/status-projeto%20acadêmico-blue)

---

# 📌 Sobre o Projeto

Esta aplicação consiste em uma **API REST desenvolvida com Node.js e Express**, que permite o **cadastro e listagem de usuários**.

O objetivo do projeto é praticar conceitos fundamentais de **desenvolvimento backend**, incluindo:

* criação de rotas
* uso de verbos HTTP
* middleware
* validação de dados
* manipulação de requisições JSON

Os dados são armazenados **temporariamente em memória**, utilizando um array JavaScript.

---

# 🚀 Tecnologias Utilizadas

* **Node.js**
* **Express**
* **JavaScript**
* **Postman** (para testes das rotas)

---

# ⚙️ Funcionalidades da API

A API permite:

✔ Cadastrar nome, email, telefone e mensagem
✔ Listar todos os usuários cadastrados
✔ Validar dados enviados pelo usuário

---

# 🌐 Rotas da API

## 📋 Listar cadastros

**GET /cadastros**

Retorna todos os usuários cadastrados.

### Exemplo de resposta

```json
[
  {
    "nome": "Maria Silva",
    "email": "maria@email.com",
    "telefone": "11999999999",
    "mensagem": "Disponível para ajudar em projetos sociais."
  }
]
```

---

## ➕ Cadastrar usuário

**POST /cadastros**

Permite cadastrar um novo usuário.

### Exemplo de requisição

```json
{
  "nome": "João Pereira",
  "email": "joao@email.com",
  "telefone": "11988888888",
  "mensagem": "Tenho experiência em desenvolvimento web."
}
```

### Exemplo de resposta

```json
{
  "mensagem": "Cadastro enviado com sucesso!"
}
```

---

# 🧩 Middleware Utilizado

Foi utilizado o middleware:

```javascript
app.use(express.json())
```

Ele permite que o servidor **receba dados no formato JSON** nas requisições HTTP.

---

# ✅ Validação de Dados

Foram implementadas validações para garantir que os dados enviados estejam corretos.

| Campo    | Regra                                     |
| -------- | ----------------------------------------- |
| Nome     | obrigatório e mínimo de 3 caracteres      |
| Email    | obrigatóriodeve possuir formato válido    |
| Telefone | obrigatório deve conter 10 ou 11 números  |
| Mensagem | máximo de 500 caracteres                  |

---

# ⚠️ Exemplo de erro de validação

Caso os dados enviados não estejam corretos:

```json
{
  "erro": ""O nome é obrigatório e deve conter pelo menos 3 caracteres" "
}
```

---

# 💾 Armazenamento de Dados

Os dados são armazenados em **memória utilizando um array JavaScript**.

```javascript
let cadastros = [];
```

Essa abordagem foi utilizada apenas para fins educacionais.

---

# 📡 Endpoints

| Método | Rota | Descrição |
|------|------|------|
| GET | /cadastros | Lista todos os usuários |
| POST | /cadastros | Cadastra um novo usuário |

---
# 🧪 Testes da API (Postman)

As rotas foram testadas utilizando o **Postman**.

Testes realizados:

* Requisição **GET** para listar usuários cadastrados
* Requisição **POST** para cadastrar usuários
* Testes de **validação de dados inválidos**

--- 

<img src="https://github.com/user-attachments/assets/5610ff1b-2f9d-4f6a-94c9-e826a9af5bdb" width="800" height="1006" alt="Print do Postman" />

---

# 📂 Estrutura do Projeto

```
projeto
│
├── .env
├── .gitignore
├── package.lock.json
├── package.json
├── server.js
└── README.md
```

---

# ▶️ Como Executar o Projeto

### 1️⃣ Clonar o repositório

```
git clone https://github.com/alexaniatoma/primeira-api-nodejs.git
```

---

### 2️⃣ Entrar na pasta do projeto

```
cd primeira-api-nodejs
```

---

### 3️⃣ Instalar dependências

```
npm install
```

---

### 4️⃣ Executar o servidor

```
npm run dev
```

---

# 🌍 Servidor

O servidor será iniciado em:

```
http://localhost:3000
```

---

# 🎓 Objetivo Acadêmico

Este projeto foi desenvolvido como **atividade prática para aprendizado de desenvolvimento backend**, com foco em:

* APIs REST
* verbos HTTP
* middleware
* validação de dados
* testes de endpoints

---

# 👩‍💻 Autora

**Alexania Toma**

Projeto desenvolvido para fins educacionais.
