import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatTableModule } from '@angular/material/table';
import { MatIcon } from "@angular/material/icon";
import { Course } from '../../model/Course';
import { CategoryPipe } from '../../../shared/pipes/category-pipe';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-courses-list',
  imports: [
    MatTableModule,
    MatIcon,
    CategoryPipe,
    MatButtonModule
  ],
  templateUrl: './courses-list.html',
  styleUrl: './courses-list.scss',
})
export class CoursesList {

  @Input() courses: Course[] = [];
  @Output() add = new EventEmitter(false);

  readonly displayedColumns = ['name', 'category', 'actions'];

  constructor() { }

  onAdd() {
    this.add.emit(true);
  }
}
