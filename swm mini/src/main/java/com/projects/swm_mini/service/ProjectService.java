package com.projects.swm_mini.service;
import com.projects.swm_mini.dto.ProjectDTO;
import com.projects.swm_mini.entity.Project;
import com.projects.swm_mini.repository.ProjectRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import javax.persistence.EntityNotFoundException;
import java.util.List;

@Slf4j
@Service
@RequiredArgsConstructor
@Transactional

public class ProjectService {
    private final ProjectRepository projectRepository;
    @Transactional(readOnly = true)
    public List<Project> getAll(){
        return projectRepository.findAll();
    }

    @Transactional(readOnly = true)
    public ProjectDTO getProject(Long id){
        return projectRepository.findById(id)
                .map(ProjectDTO::from)
                .orElseThrow(() -> new EntityNotFoundException("게시글이 없습니다 - articleId: " + id));
    }

    public ProjectDTO saveProject(ProjectDTO dto){
        Project project = dto.toEntity();
        projectRepository.save(project);
        return dto;
    }
}
