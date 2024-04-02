import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface IDashboardOverview {
  typeName: string,
  typeIcon: string,
  showDollarSign: boolean,
  value: number,
  deltaPercent: number,
  deltaPeriod: string, 
  order: number,
  typeColor: string,
}

export interface IWebsiteViews {
  date: string,
  viewCount: number
}

export interface IWebsiteViewsOverview {
  weeklyWebsiteViews: IWebsiteViews[],
  lastCampaignDate: string
}

export interface IMonthlySales {
  date: string,
  sales: number
}

export interface IDailySalesOverview {
  monthlySales: IMonthlySales[],
  dailySalesDeltaPercent: number,
  lastUpdatedDate: EpochTimeStamp
}

export interface IMember {
  name: string,
  avatar: string,
}

export interface IProjectOverview {
  title: string,
  companyIcon: string,
  budget?: number,
  progressPercentage: number,
  members: IMember[]
}


@Injectable({
  providedIn: 'root'
})
export class ReportsService {
  
  constructor(private http: HttpClient) { }

  getDashboardOverview(): Observable<IDashboardOverview[]> {
    return this.http.get<IDashboardOverview[]>('/assets/mock/mock-dashboard-overview.json');
  }

  getWebsiteViewsOverview(): Observable<IWebsiteViewsOverview> {
    return this.http.get<IWebsiteViewsOverview>('/assets/mock/mock-website-views-overview.json');
  }

  getDailySalesOverview(): Observable<IDailySalesOverview> {
    return this.http.get<IDailySalesOverview>('/assets/mock/mock-daily-sales-overview.json');
  }

  getProjectsOverview(): Observable<IProjectOverview[]> {
    return this.http.get<IProjectOverview[]>('/assets/mock/mock-projects-overview.json');
  }

}
