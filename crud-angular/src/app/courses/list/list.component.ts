import { CoursesService } from '../services/courses.service';
import { Component, OnInit } from '@angular/core';

import { Course } from '../models/course';
import { catchError, Observable, of } from 'rxjs';
import {MatSnackBar} from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { SnackBarServiceService } from 'src/app/shared/services/snack-bar-service.service';

@Component({
  selector: 'app-courses-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class CoursesComponent implements OnInit {

  courses$: Observable<Course[]> = new Observable();

  displayedColumns = ['name', 'category', 'actions'];

  constructor(
    private service: CoursesService,
    private snackBarService: SnackBarServiceService,
    private router: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.courses$ = this.service.getAll()
    .pipe(
      catchError(() => {
        this.snackBarService.onError('Erro ao carregar os cursos.')
        return of([])
      })
    );
  }

  onAdd(): void {
    this.router.navigate(['novo'], { relativeTo : this.activatedRoute});
  }
}
