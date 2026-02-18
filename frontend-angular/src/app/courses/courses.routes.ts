import { Routes } from "@angular/router";
import { Courses } from "./container/courses/courses";
import { CourseForm } from "./container/course-form/course-form";


export const COURSES_ROUTES: Routes = [
    {path: '', component: Courses},
    {path: 'new', component: CourseForm}
]