import { DatePipe, MonthPipe, DayPipe } from './date.pipe';

describe('DatePipe', () => {
  it('create an instance', () => {
    const pipe = new DatePipe();
    expect(pipe).toBeTruthy();
  });
});

describe('MonthPipe', () => {
  it('create an instance', () => {
    const pipe = new MonthPipe();
    expect(pipe).toBeTruthy();
  });
});

describe('DayPipe', () => {
  it('create an instance', () => {
    const pipe = new DayPipe();
    expect(pipe).toBeTruthy();
  });
});
