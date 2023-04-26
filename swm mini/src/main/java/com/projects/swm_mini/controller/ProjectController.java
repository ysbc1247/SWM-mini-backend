package com.projects.swm_mini.controller;

import com.projects.swm_mini.dto.ProjectDTO;
import com.projects.swm_mini.entity.Project;
import com.projects.swm_mini.service.ProjectService;
import lombok.Getter;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RequiredArgsConstructor
@RequestMapping("/")
@RestController
public class ProjectController {

    private final ProjectService service;

    @GetMapping("/board")
    public List<Project> projects(){
        return service.getAll();
    }

    @GetMapping("/board/{id}")
    public ProjectDTO project(@PathVariable Long id){
        return service.getProject(id);
    }

    @PostMapping("/new")
    public ProjectDTO newProject(@ModelAttribute ProjectDTO projectDTO){
        return service.saveProject(projectDTO);
    }
}
