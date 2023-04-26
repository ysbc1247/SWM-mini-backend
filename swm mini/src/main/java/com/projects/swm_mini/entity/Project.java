package com.projects.swm_mini.enitty;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name = "article")
@Getter
@Setter

public class Project {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;

    @Column(nullable = false)
    private Long title;

    @Column(nullable = false)
    private Long username;

    @Column(nullable = false)
    private Long teamname;

    @Column(nullable = false)
    private Long date;

    @Column(nullable = false)
    private Long title;
    
    @Column(nullable = false)
    private Long title;


}
