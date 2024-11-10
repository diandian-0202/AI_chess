package com.projects.aichess;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import io.github.cdimascio.dotenv.Dotenv;

@SpringBootApplication
public class AichessApplication {

	public static void main(String[] args) {
		Dotenv dotenv = Dotenv.configure().load();

		// Retrieve environment variables using dotenv
		System.out.println("DB_HOST: " + dotenv.get("DB_HOST"));
		System.out.println("DB_PORT: " + dotenv.get("DB_PORT"));
		System.out.println("DB_NAME: " + dotenv.get("DB_NAME"));
		System.out.println("DB_USERNAME: " + dotenv.get("DB_USERNAME"));
		// Set environment variables as system properties
		System.setProperty("DB_HOST", dotenv.get("DB_HOST"));
		System.setProperty("DB_PORT", dotenv.get("DB_PORT"));
		System.setProperty("DB_NAME", dotenv.get("DB_NAME"));
		System.setProperty("DB_USERNAME", dotenv.get("DB_USERNAME"));
		System.setProperty("DB_PASSWORD", dotenv.get("DB_PASSWORD"));
		SpringApplication.run(AichessApplication.class, args);
		System.out.println("Hello World");

	}

}
