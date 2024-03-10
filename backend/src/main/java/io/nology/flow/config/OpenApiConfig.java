package io.nology.flow.config;

import io.swagger.v3.oas.annotations.OpenAPIDefinition;
import io.swagger.v3.oas.annotations.info.Contact;
import io.swagger.v3.oas.annotations.info.Info;
import io.swagger.v3.oas.annotations.servers.Server;

@OpenAPIDefinition(
		info = @Info(
				contact = @Contact(
						name = "Marielle",
						url = "https://mariellelopez.netlify.app"
						),
				description = "OpenAPI Documentation for Flow",
				title = "OpenAPI Specification - Flow"
				),
		servers = {
				@Server(
						description = "Local Environment",
						url = "http://localhost:8080"
				)
		}
	)
public class OpenApiConfig {
	
}
