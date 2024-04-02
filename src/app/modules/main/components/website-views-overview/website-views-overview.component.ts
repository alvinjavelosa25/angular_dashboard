import { Component } from '@angular/core';
import { IWebsiteViews, ReportsService } from '../../services/reports.service';
import Chart from 'chart.js/auto';
import { DayPipe } from 'src/app/shared/pipes/date.pipe';

@Component({
  selector: 'app-website-views-overview',
  templateUrl: './website-views-overview.component.html',
  styleUrls: ['./website-views-overview.component.scss']
})
export class WebsiteViewsOverviewComponent {

  lastCampaignDate: string = '';
  weeklyWebsiteViews: IWebsiteViews[] = [];
  viewsCount: number[] = [];
  day: string[] = [];
  public chart: any;
  constructor(
    private reportsService: ReportsService
  ) {
    this.reportsService.getWebsiteViewsOverview().subscribe((result) => {
      this.lastCampaignDate = result.lastCampaignDate;
      this.weeklyWebsiteViews = result.weeklyWebsiteViews;
      
      // console.log('weekly', this.weeklyWebsiteViews);
      this.viewsCount = this.weeklyWebsiteViews.map(a => a.viewCount);
      const getDayName = new DayPipe();
      this.day = this.weeklyWebsiteViews.map(a => getDayName.transform(a.date));

      this.createChart()

    })
  }

  createChart(){
    this.chart = new Chart("MyChart", {
      type: 'bar',

      data: {// values on X-Axis
        labels: this.day, 
	      datasets: [
          {
            label: "Profit",
            data: this.viewsCount,
            backgroundColor: '#fff',
            borderRadius: 10,
            barThickness: 5
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
              color: "#fff",
              stepSize: 20
            },
            grid:{
              color: '#e55186'
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
              color: '#ec5f90',
            },
            border: {
                dash: [5,4],
            }
          }
        }
      }
    });
  }
}