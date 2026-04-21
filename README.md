# 🚀 Integração com API - JSONPlaceholder

Aplicação desenvolvida em React com foco em consumo de API REST, navegação entre páginas e boas práticas de arquitetura front-end.

---

## 📌 Sobre o Projeto

Este projeto consome a API pública **JSONPlaceholder** para exibir:

* Lista de usuários
* Posts de cada usuário
* Comentários de cada post

A aplicação simula um fluxo real de produto, com navegação entre telas e tratamento de estados como carregamento e erro.

---

## 🧠 Objetivo

* Praticar integração com API REST
* Aplicar boas práticas de arquitetura em React
* Simular um fluxo real de produto
* Melhorar comunicação técnica (pensando como cliente e dev)

---

## 🛠️ Tecnologias Utilizadas

* React
* React Router DOM
* Axios
* JavaScript (ES6+)
* Vite

---

## 📁 Estrutura do Projeto

```
src/
 ├── api/
 │    └── client.js        # Configuração do axios
 │
 ├── hooks/
 │    └── useFetch.js      # Hook customizado para requisições
 │
 ├── pages/
 │    ├── Users.jsx        # Lista de usuários
 │    ├── Posts.jsx        # Posts por usuário
 │    └── Comments.jsx     # Comentários por post
 │
 ├── components/
 │    ├── Loading.jsx      # Componente de carregamento
 │    └── ErrorMessage.jsx # Componente de erro
 │
 ├── routes/
 │    └── AppRoutes.jsx    # Configuração de rotas
 │
 ├── App.jsx
 └── main.jsx
```

---

## 🔗 Endpoints Consumidos

* `GET /users` → Lista usuários
* `GET /posts?userId={id}` → Posts por usuário
* `GET /comments?postId={id}` → Comentários por post

Base URL:

```
https://jsonplaceholder.typicode.com
```

---

## ⚙️ Funcionalidades

* Navegação entre usuários → posts → comentários
* Consumo de API com Axios
* Hook customizado para requisições
* Tratamento de loading e erro
* Estrutura escalável e organizada

---

## ▶️ Como Rodar o Projeto

### 1. Clone o repositório

```
git clone https://github.com/seu-usuario/seu-repo.git
```

### 2. Acesse a pasta

```
cd seu-repo
```

### 3. Instale as dependências

```
npm install
```

### 4. Rode o projeto

```
npm run dev
```

---

## 💡 Boas Práticas Aplicadas

* Separação de responsabilidades
* Reutilização de código com hooks
* Abstração da camada de API
* Componentização
* Tratamento de estados assíncronos

---

## 🚀 Melhorias Futuras

* Implementar React Query (TanStack Query)
* Adicionar paginação ou infinite scroll
* Criar testes com Jest e React Testing Library
* Melhorar UI com TailwindCSS
* Implementar cache de requisições

---

## 👨‍💻 Autor

Samuel Oliveira

---

## 📄 Licença

Este projeto está sob a licença MIT.
