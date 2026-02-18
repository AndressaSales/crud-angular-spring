package com.andressa.backend_spring.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.andressa.backend_spring.model.Course;

public interface CourseRepository extends JpaRepository<Course, Long> {
    
}
