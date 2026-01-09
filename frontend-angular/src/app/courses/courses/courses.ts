import { Component } from '@angular/core';
import {MatTableModule} from '@angular/material/table';
import { Course } from '../model/Course';

@Component({
  selector: 'app-courses',
  imports: [MatTableModule],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses {

  courses: Course[] = [
    {_id: '1', nome: 'Angular', category: 'front-end'}
  ];
  displayedColumns = ['nome', 'category'];
  

}
