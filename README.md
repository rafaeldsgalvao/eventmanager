

# EventManager

Sistema completo para gestão de eventos, com frontend em Angular e backend em Spring Boot, orquestrado com Docker.

## 🧱 Estrutura do Projeto

```
eventmanager/
├── backend/        # Backend com Spring Boot + PostgreSQL
├── frontend/       # Frontend com Angular
├── docker-compose.yml
├── .gitignore
└── README.md       # Este arquivo
```

Cada parte do sistema possui seu próprio `README.md` com instruções específicas, mas este arquivo fornece a visão geral e orientações para rodar o projeto completo.

## 🚀 Como rodar o projeto

### Pré-requisitos

- Docker
- Docker Compose

### Passos

1. Clone o repositório:
   ```bash
   git clone git@github.com:rafaeldsgalvao/eventmanager.git
   cd eventmanager
   ```

2. Suba os containers com Docker Compose:
   ```bash
   docker-compose up --build
   ```

3. Acesse o sistema:
   - Frontend: http://localhost

O Docker irá iniciar o banco de dados, a API e a aplicação Angular automaticamente.

## 📦 Serviços

- **Frontend**: Angular 20 + Angular Material
- **Backend**: Java 17 + Spring Boot + PostgreSQL
- **Banco de dados**: PostgreSQL
- **Gerenciamento de containers**: Docker + Docker Compose

## 🧪 Funcionalidades implementadas

- CRUD de eventos com formulário reativo
- Modal para criar/editar/visualizar eventos
- Validações de formulário (obrigatoriedade, data futura)
- Paginação e ordenação
- Design responsivo com Angular Material
- Mensagens de erro/sucesso com Snackbar

## 📁 Documentação por módulo

- [`backend/README.md`](./backend/README.md)
- [`frontend/README.md`](./frontend/README.md)

---

Desenvolvido para testes e demonstrações técnicas.