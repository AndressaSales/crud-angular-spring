package com.andressa.backend_spring.controller;

import java.util.List;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import com.andressa.backend_spring.model.Course;
import com.andressa.backend_spring.repository.CourseRepository;

import lombok.AllArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;



@RestController
@RequestMapping("/api/courses")
@AllArgsConstructor
public class CoursesController {

    private CourseRepository courseRepository;


    @GetMapping 
    public List<Course> list() {
        return courseRepository.findAll();
    }
    
    @PostMapping
    @ResponseStatus(code = HttpStatus.CREATED)
    public Course postMethodCreate(@RequestBody Course course) {
        //TODO: process POST request
        
        //System.out.println(course.getName());

        return courseRepository.save(course);
        
        //return ResponseEntity.status(HttpStatus.CREATED).body(courseRepository.save(course));
    }
     

}
