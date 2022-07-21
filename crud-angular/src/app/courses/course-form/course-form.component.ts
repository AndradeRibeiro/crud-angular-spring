import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CoursesService } from '../services/courses.service';
import { SnackBarServiceService } from './../../shared/services/snack-bar-service.service';

@Component({
  selector: 'app-course-form',
  templateUrl: './course-form.component.html',
  styleUrls: ['./course-form.component.scss']
})
export class CourseFormComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder,
    private service: CoursesService,
    private snackBarService: SnackBarServiceService,
    private location: Location) {

    this.form = this.formBuilder.group({
      name: [null],
      category: [null]
    })
  }

  ngOnInit(): void {
  }

  onSubmit(): void {
    this.service.save(this.form.value).subscribe(
      () => {
        this.snackBarService.onSuccess('Registro salvo com sucesso');
        this.backPage();
      },
      (error) => {
        this.snackBarService.onError(error);
      });
  }

  onCancel(): void {
    this.backPage();
  }

  backPage(): void {
    this.location.back();
  }
}
