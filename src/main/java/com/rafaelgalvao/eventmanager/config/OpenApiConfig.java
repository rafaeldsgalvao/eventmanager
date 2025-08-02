package com.rafaelgalvao.eventmanager.config;

import io.swagger.v3.oas.models.*;
import io.swagger.v3.oas.models.info.*;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class OpenApiConfig {

    @Bean
    public OpenAPI customOpenAPI() {
        return new OpenAPI()
                .info(new Info()
                        .title("API de Gestão de Eventos")
                        .version("1.0.0")
                        .description("Sistema simples de cadastro de eventos para o teste técnico da petrobras."));
    }
}
