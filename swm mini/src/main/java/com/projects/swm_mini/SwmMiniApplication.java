package com.projects.swm_mini;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.data.jpa.repository.config.EnableJpaAuditing;

@SpringBootApplication
@EnableJpaAuditing
public class SwmMiniApplication {

    public static void main(String[] args) {
        SpringApplication.run(SwmMiniApplication.class, args);
    }

}
