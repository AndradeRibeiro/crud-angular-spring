import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { delay, first, tap } from 'rxjs';

import { Course } from './../models/course';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly api = 'api/courses';

  constructor(private http: HttpClient) { }

  getAll() {
    return this.http.get<Course[]>(this.api)
    .pipe(
      first()
    );
  }

  save(course: Course) {
    return this.http.post<Course>(this.api, course)
    .pipe(
      first()
    );
  }
}
