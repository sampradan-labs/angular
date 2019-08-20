import { Pipe, PipeTransform } from '@angular/core';
// {{diwali | reverse}}
@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any, args?:any): any {
    let newStr: string = "";

    for (var i = value.length - 1; i >= 0; i--) {
      newStr += value.charAt(i);
    }
    return newStr;
  }

}
