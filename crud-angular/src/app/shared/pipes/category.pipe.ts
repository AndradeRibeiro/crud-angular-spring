import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): unknown {

    switch(value) {
      case 'front-end' : return 'code';
      case 'bacl-end' : return 'computer';
    }

    return 'code';
  }

}
