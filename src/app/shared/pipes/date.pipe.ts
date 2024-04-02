import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateAgo',
  pure: true
})
export class DatePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value) {
      const seconds = Math.floor((+new Date() - +new Date(value)) / 1000);
      if (seconds < 29) {
        return 'Just now';
      }
      const intervals: any = {
        'year': 31536000,
        'month': 2592000,
        'week': 604800,
        'day': 86400,
        'hour': 3600,
        'minute': 60,
        'second': 1
      };
      let counter;
      for (const i in intervals) {
        counter = Math.floor(seconds / intervals[i]);
        if (counter > 0) {
          if (counter === 1) {
            return counter + ' ' + i + ' ago';
          } else {
            return counter + ' ' + i + 's ago';
          }
        }
      }
    }
    return value;
  }
}

@Pipe({
  name: 'monthName',
  pure: true
})
export class MonthPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const date = new Date(value);  // yyyy-mm-dd
    const month = date.toLocaleString('default', { month: 'short' });
    // console.log(month);
    return month;
  }
}

@Pipe({
  name: 'dayName',
  pure: true
})
export class DayPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const date = new Date(value);  // yyyy-mm-dd
    const month = date.toLocaleString('default', { weekday: 'narrow' });
    // console.log(month);
    return month;
  }
}

@Pipe({
  name: 'period',
  pure: true
})
export class PeriodPipe implements PipeTransform {

  transform(value: string, args?: any): string {
    let period = '';
    switch(value) {
      case 'daily':
        period = 'than yesterday'
        break;
      case 'weekly':
        period = 'than last week'
        break;
      case 'monthly':
        period = 'than last month'
        break;
      default:
        period = value;
    }
    return period;
  }
}