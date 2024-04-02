import { Component } from '@angular/core';
import { IMonthlySales, ReportsService } from '../../services/reports.service';
import Chart from 'chart.js/auto';
import { MonthPipe } from 'src/app/shared/pipes/date.pipe';

@Component({
  selector: 'app-daily-sales-overview',
  templateUrl: './daily-sales-overview.component.html',
  styleUrls: ['./daily-sales-overview.component.scss']
})
export class DailySalesOverviewComponent {

  lastUpdatedDate!: EpochTimeStamp;
  dailySalesDeltaPercent: number = 0;
  monthlySales: IMonthlySales[] = [];

  salesVal: number[] = [];
  monthVal: string[] = [];

  public salesChart: any;

  constructor(
    private reportsService: ReportsService
  ) {
    this.reportsService.getDailySalesOverview().subscribe((result) => {
      this.lastUpdatedDate = result.lastUpdatedDate;
      this.dailySalesDeltaPercent = result.dailySalesDeltaPercent;
      this.monthlySales = result.monthlySales;
      this.salesVal = this.monthlySales.map(a => a.sales);
      // MonthPipe used to Get MONTH of date
      const getMonthName = new MonthPipe();
      this.monthVal = this.monthlySales.map(a => getMonthName.transform(a.date));
      this.createChart();
    })
  }

  get deltaDetails(): string {
    if (this.dailySalesDeltaPercent > 0) {
      return `increase in today sales.`;
    } else if (this.dailySalesDeltaPercent < 0) {
      return `decrease in today sales.`;
    } else {
      return 'No changes.';
    }
  }

  createChart(){  
    this.salesChart = new Chart("DailySalesChart", {
      type: 'line',

      data: {// X-Axis values
        labels: this.monthVal.slice(-9), 
	       datasets: [
          {
            label: "Profit",
            data: this.salesVal.slice(-9),
            backgroundColor: '#fff',
            borderColor: '#fff'
          }  
        ]
      },
      options: {
        maintainAspectRatio: false,
        layout: {
          padding: {
            top: 30,
            left: 15,
            right: 15,
            bottom: 20
          }
        },
        plugins: {
          legend: {
            display: false
          }
        },
        scales: {
          y: {
            ticks: {
              color: "#fff"
            },
            grid:{
              color: '#70bb73'
            },
            border: {
              dash: [5,4]
            }
          },
          x: {
            ticks: {
              color: "#fff"
            },
            grid:{
              color: '#70bb73',
            },
            border: {
              dash: [5,4],
            }, 
          }
        }
      }
    });
  }
}