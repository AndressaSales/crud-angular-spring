package com.andressa.backend_spring;

import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;

import com.andressa.backend_spring.model.Course;
import com.andressa.backend_spring.repository.CourseRepository;

@SpringBootApplication
public class BackendSpringApplication {

	public static void main(String[] args) {
		SpringApplication.run(BackendSpringApplication.class, args);
	}

	@Bean
	CommandLineRunner iniDatabase(CourseRepository courseRepository ) {

		return args -> {

			courseRepository.deleteAll();

			Course c = new Course();
			c.setName("Angular com Spring");
			c.setCategory("front-end");

			courseRepository.save(c);

		};

	}

}
