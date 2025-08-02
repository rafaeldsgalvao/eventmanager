

# EventManager API

API REST para gerenciamento de eventos, desenvolvida com **Java 17**, **Spring Boot**, **PostgreSQL**, **Flyway**, **Docker**, e **Swagger**.

## 🧱 Funcionalidades

- CRUD completo de eventos:
  - `GET /api/events` – Listagem paginada
  - `GET /api/events/{id}` – Detalhes do evento
  - `POST /api/events` – Criação de evento
  - `PUT /api/events/{id}` – Atualização
  - `DELETE /api/events/{id}` – Remoção lógica (soft delete)
- Soft delete via flag `deleted = true`
- Validações com Bean Validation (`@Valid`, `@NotBlank`, `@Size`, `@FutureOrPresent`, etc.)
- Documentação Swagger/OpenAPI em `/swagger-ui.html`
- Migrations com Flyway
- Testes:
  - 3 testes de unidade (Service e Repository)
  - 1 teste de integração com banco H2
- Docker com multi-stage build
- Docker Compose com rede nomeada explícita

---

## ⚙️ Requisitos

Certifique-se de ter instalado:

- Java 17+
- Maven 3.8+
- Docker
- Docker Compose

---

## 🚀 Como rodar o projeto

### 1. Clonar o repositório

```bash
git clone git@github.com:rafaeldsgalvao/eventmanager-api.git
cd eventmanager-api
```

### 2. Compilar o projeto

```bash
mvn clean install -DskipTests
```

### 3. Subir com Docker Compose

```bash
docker-compose up --build
```

A aplicação estará disponível em:  
📍 http://localhost:8080  
📘 Documentação Swagger: http://localhost:8080/swagger-ui.html

---

## 🛠️ Estrutura do Projeto

```bash
src/
├── main/
│   ├── java/com/rafaelgalvao/eventmanager/
│   │   ├── controller/         # Controllers REST
│   │   ├── service/            # Interfaces de serviços
│   │   ├── service/impl/       # Implementações
│   │   ├── dto/                # DTOs de entrada e saída
│   │   ├── repository/         # Repositórios JPA
│   │   ├── entity/             # Entidades JPA
│   │   └── config/             # Configurações (Swagger, etc.)
│   └── resources/
│       ├── application.yml     # Configuração da aplicação
│       └── db/migration/       # Migrations Flyway
└── test/
    ├── ...                     # Testes unitários e de integração
```

---

## 🧪 Rodando os Testes

```bash
mvn clean test
```

- Os testes de unidade usam Mockito e banco H2 em memória
- As migrations Flyway são aplicadas durante os testes

---

## 🐳 Docker

### Dockerfile

```Dockerfile
FROM eclipse-temurin:17-jdk
WORKDIR /app
COPY target/eventmanager-0.0.1.jar app.jar
EXPOSE 8080
ENTRYPOINT ["java", "-jar", "app.jar"]
```

### docker-compose.yml

```yaml
version: '3.8'

services:
  app:
    build: .
    ports:
      - "8080:8080"
    environment:
      - SPRING_DATASOURCE_URL=jdbc:postgresql://db:5432/eventdb
      - SPRING_DATASOURCE_USERNAME=postgres
      - SPRING_DATASOURCE_PASSWORD=postgres
      - SPRING_JPA_HIBERNATE_DDL_AUTO=none
    depends_on:
      - db
    networks:
      - eventmanager_network

  db:
    image: postgres:15
    restart: always
    environment:
      POSTGRES_DB: eventdb
      POSTGRES_USER: postgres
      POSTGRES_PASSWORD: postgres
    ports:
      - "5432:5432"
    volumes:
      - postgres_data:/var/lib/postgresql/data
    networks:
      - eventmanager_network

volumes:
  postgres_data:

networks:
  eventmanager_network:
    name: eventmanager_network
```

---

## 📄 Observações

- O soft delete é feito com a flag `deleted = true`, sem remoção física.
- A documentação Swagger está disponível automaticamente em ambiente dev.
- O Flyway aplica as migrations automaticamente ao iniciar a aplicação.

---

## 👨‍💻 Autor

Rafael Galvão  
Desenvolvedor Java | Spring Boot | Docker | PostgreSQL