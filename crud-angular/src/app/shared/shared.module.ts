import { CategoryPipe } from './pipes/category.pipe';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    CategoryPipe
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    CategoryPipe
  ]
})
export class SharedModule { }
