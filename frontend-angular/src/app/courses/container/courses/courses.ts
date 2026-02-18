import { Component } from '@angular/core';

import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';

import { Course } from '../../model/Course';
import { CoursesServ } from '../../services/courses-serv';
import { catchError, Observable, of } from 'rxjs';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { AsyncPipe } from '@angular/common';
import { MatDialog } from '@angular/material/dialog';
import { ErrorDialog } from '../../../shared/components/error-dialog/error-dialog';
import { MatIconModule } from '@angular/material/icon';

import { ActivatedRoute, Router } from '@angular/router';
import { CoursesList } from '../../components/courses-list/courses-list';


@Component({
  selector: 'app-courses',
  imports: [
    MatTableModule,
    MatCardModule,
    MatToolbarModule,
    MatProgressSpinnerModule,
    AsyncPipe,
    MatIconModule,
    MatButtonModule,
    CoursesList
],
  templateUrl: './courses.html',
  styleUrl: './courses.scss',
})
export class Courses {

  courses$: Observable<Course[]>;
  
  
  //coursesServices: CoursesServ

  constructor(
    private coursesSer: CoursesServ,
    public diolog: MatDialog,
    private router: Router,
    private route: ActivatedRoute
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

  onAdd(){
    //console.log('onADD');
    this.router.navigate(['new'], {relativeTo: this.route})
  }

}
