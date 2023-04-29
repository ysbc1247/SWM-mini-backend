package com.projects.swm_mini.entity;

import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;

@Entity
@Table(indexes = {
        @Index(columnList = "title"),
        @Index(columnList = "createdAt")
})
@Getter
@Setter

public class Project extends AuditingFields{
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private String projectName;

    @Column(nullable = false)
    private String username;

    @Column(nullable = false)
    private String teamName;

    @Column(nullable = false)
    private String title;

    @Column(nullable = false, length = 1500)
    private String description;

    @Column
    private String link;

    protected  Project(){}
    private Project(String projectName, String username, String teamName, String title, String description, String link){
        this.projectName = projectName;
        this.username = username;
        this.teamName = teamName;
        this.title = title;
        this.description = description;
        this.link = link;
    }
    public static Project of(String projectName, String username, String teamName, String title, String description, String link){
        return new Project(projectName, username, teamName, title, description, link);
    }

}
