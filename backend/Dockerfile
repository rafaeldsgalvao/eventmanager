# Etapa de build
FROM eclipse-temurin:17-jdk as builder

WORKDIR /app

COPY .. .

RUN ./mvnw clean package -DskipTests

# Etapa de execução
FROM eclipse-temurin:17-jdk

WORKDIR /app

COPY --from=builder /app/target/eventmanager-0.0.1.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]