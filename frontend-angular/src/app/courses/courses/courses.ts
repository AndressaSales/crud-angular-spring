import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';

import { Course } from '../model/Course';
import { CoursesServ } from '../services/courses-serv';
import { catchError, Observable, of } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AsyncPipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialog } from '../../shared/components/error-dialog/error-dialog';
import { MatIconModule } from '@angular/material/icon';
import { CategoryPipe } from "../../shared/pipes/category-pipe";


@Component({
  selector: 'app-courses',
  imports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    AsyncPipe,
    MatIconModule,
    CategoryPipe
],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses {

  courses$: Observable<Course[]>;
  displayedColumns = ['nome', 'category'];
  
  //coursesServices: CoursesServ

  constructor(
    private coursesSer: CoursesServ,
    public diolog: MatDialog
  ){
    //this.coursesServices = new CoursesServ();
    this.courses$ = this.coursesSer.list()
      .pipe(
        catchError(error => {
          //console.log(error);
          this.onError('Error ao carregar cursos.');
          return of([])
        })
      );
  }

  onError(errorMsg: string) {
    this.diolog.open(ErrorDialog, {
      data: errorMsg
    });
  }

}
