import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'number_'
})
export class NumberPipe implements PipeTransform {

  // transform(value: unknown, ...args: unknown[]): unknown {
  //   return null;
  // }

  transform(value: number, args?: any): number {
    let formatNumber: any;
    let key = '';
    
    if(value > 15000) {
      const exponent = [
        {key: 'm', value: Math.pow(10, 6)},
        {key: 'k', value: 1000}
      ];
      for (let i = 0; i < exponent.length; i++) {
        let val = value / exponent[i].value;
        // console.log('val', val);
        val = Math.round(val * 10) / 10;
        // console.log('val2', val);

        if (val >= 1) {
          value = val;
          key = exponent[i].key;
          break;
        }
      }
      formatNumber = value + key;
    } else {
      formatNumber = new Intl.NumberFormat().format(Number(value));
    }
    
    return formatNumber;
  }

}
