import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'custom'
  // pure:false, impure pipe
})
export class CustomPipe implements PipeTransform {

  transform(value:any): any {
    let currentYear:any = new Date().getFullYear();  //2023
    let userBirthYear:any = new Date(value).getFullYear();
    let userAge:any = currentYear-userBirthYear;
    return userAge;

  }

}
