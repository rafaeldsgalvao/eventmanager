# 📅 EventManager - Frontend

Interface web desenvolvida em **Angular 20** para gerenciamento de eventos, com foco em experiência fluida, validações interativas e design responsivo utilizando **Angular Material**.

## 🔧 Tecnologias e ferramentas

- [Angular 20+](https://angular.io/)
- [Angular Material](https://material.angular.io/)
- [TypeScript](https://www.typescriptlang.org/)
- [SCSS](https://sass-lang.com/)
- Modularização com `core`, `shared` e `features`
- Comunicação com API via `HttpClient`
- Internacionalização `pt-BR` para datas
- Feedback visual com `MatSnackBar`
- CRUD completo com:
  - Listagem paginada
  - Modal de criação e edição
  - Modal de confirmação de exclusão

---

## ▶️ Como executar localmente

### Pré-requisitos

- Node.js 18+
- Angular CLI instalado globalmente

```bash
npm install -g @angular/cli
```

### Instalação

```bash
git clone https://github.com/rafaeldsgalvao/eventmanager.git
cd eventmanager/frontend
npm install
```

### Executando localmente

```bash
ng serve
```

Abra [http://localhost:4200](http://localhost:4200) no navegador.

---

## 📂 Estrutura do Projeto

```bash
frontend/
├── core/              # Serviços e modelos globais (ex: EventService, EventModel)
├── shared/            # Componentes reutilizáveis e helpers (ex: formatos de data)
├── features/          # Componentes principais (listagem, modais, etc.)
│   └── events/
│       ├── event-list/          # Tabela com listagem dos eventos
│       ├── event-edit-modal/   # Modal de edição de evento
│       └── event-create-modal/ # Modal de criação de novo evento
├── app.config.ts      # Configurações do projeto (locale, DateAdapter)
└── app.routes.ts      # Definição das rotas principais
```

---

## ✅ Funcionalidades

### 📋 Listagem de eventos

- Tabela responsiva com colunas:
  - Título
  - Data formatada (`dd/MM/yyyy`)
  - Local
  - Ações (ver detalhes, editar, excluir)
- Paginação automática
- Cores alternadas entre linhas
- Botões com ícones e destaque visual

### ✏️ Criar e Editar Evento

- Abertura via `MatDialog`
- Formulário com validações:
  - Todos os campos obrigatórios
  - Data não pode ser anterior a amanhã
- Spinner de carregamento ao salvar
- Feedback visual no topo direito da tela

### ❌ Excluir Evento

- Modal de confirmação customizado com:
  - Cor vermelha de alerta
  - Ações de “Cancelar” e “Excluir”

---

## 🌐 Integração com Backend

As requisições são feitas para:

```
GET    /api/events
POST   /api/events
PUT    /api/events/:id
DELETE /api/events/:id
```

Certifique-se de que o backend esteja acessível na mesma origem (`http://localhost:8080` por padrão) ou ajuste as configurações de CORS e proxy se necessário.

---

## 📦 Build para Produção

```bash
ng build --configuration=production
```

Os arquivos serão gerados na pasta `dist/`. Você pode servir via nginx, Docker, etc.

---

## ✨ Melhorias Futuras

- Filtro e busca por título ou local
- Responsividade avançada para mobile
- Migração para `ReactiveFormsModule`
- Internacionalização completa (i18n)

---

## 🧑‍💻 Autor

Desenvolvido por Rafael Galvão
