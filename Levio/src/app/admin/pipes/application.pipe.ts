import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'application',
  pure: false
})
export class ApplicationPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (!args) {
      return value;
    } else {
      args = args;
    }
    console.log(args);
    return value.filter(items => {
      console.log(items.state);
      items.state.startsWith('i') === true; });
  }

}
