import { NgModule } from '@angular/core';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatCardModule } from '@angular/material/card';
import { MatTableModule } from '@angular/material/table';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { DatePipe, MonthPipe, DayPipe, PeriodPipe } from './pipes/date.pipe';
import { NumberPipe } from './pipes/number.pipe';

@NgModule({
  declarations: [
    DatePipe,
    NumberPipe,
    MonthPipe,
    DayPipe,
    PeriodPipe
  ],
  imports: [],
  exports: [
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatToolbarModule,
    MatProgressBarModule,
    MatCardModule,
    MatTableModule,
    NumberPipe,
    DatePipe,
    MonthPipe,
    DayPipe,
    PeriodPipe
  ]
})
export class SharedModule { }
