package com.projects.swm_mini.dto;

import com.projects.swm_mini.entity.Project;
import java.time.LocalDateTime;
import java.util.Optional;

public record ProjectDTO(
        Long id,
        String projectName,
        String userName,
        String teamName,

        LocalDateTime date,
        String title,
        String description,
        Optional<String> link
) {
    public static ProjectDTO of(String projectName, String userName, String teamName, String title, String description, String link) {
        return new ProjectDTO(null, projectName, userName, teamName, LocalDateTime.now(), title, description, Optional.ofNullable(link));
    }

    public static ProjectDTO of(Long id, String projectName, String userName, String teamName, LocalDateTime date, String title, String description, String link) {
        return new ProjectDTO(id, projectName, userName, teamName, date, title, description, Optional.ofNullable(link));
    }

    public static ProjectDTO from(Project project){
        return new ProjectDTO(
                project.getId(),
                project.getProjectName(),
                project.getUsername(),
                project.getTeamName(),
                project.getCreatedAt(),
                project.getTitle(),
                project.getDescription(),
                Optional.ofNullable(project.getLink())
        );
    }

    public Project toEntity(){
        return Project.of(
                projectName,
                userName,
                teamName,
                title,
                description,
                link.orElse(null)
        );
    }
}
