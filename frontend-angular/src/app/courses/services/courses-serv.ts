import { HttpClient } from '@angular/common/http';

import { Injectable } from '@angular/core';

import { Course } from '../model/Course';
import { delay, first, tap } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class CoursesServ {

  private readonly API = 'api/courses'

  constructor(private httpClient: HttpClient) {}

  list() {
    return this.httpClient.get<Course[]>(this.API)
      .pipe(
        first(),
        //delay(5000),
        tap(courses => console.log(courses)
        )
      );
  }
  save(record: Course){
    //console.log(record);
    return this.httpClient.post<Course>(this.API, record);
  }
}
