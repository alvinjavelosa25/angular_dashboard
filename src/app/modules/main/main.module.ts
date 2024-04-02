import { NgModule } from "@angular/core";
import { DashboardPageComponent } from './pages/dashboard-page/dashboard-page.component';
import { DashboardOverviewComponent } from './components/dashboard-overview/dashboard-overview.component';
import { MainRoutingModule } from "./main-routing.module";
import { SharedModule } from "src/app/shared/shared.module";
import { CommonModule } from "@angular/common";
import { WebsiteViewsOverviewComponent } from './components/website-views-overview/website-views-overview.component';
import { DailySalesOverviewComponent } from './components/daily-sales-overview/daily-sales-overview.component';
import { ProjectsOverviewComponent } from './components/projects-overview/projects-overview.component';

@NgModule({
  declarations: [
    DashboardPageComponent,
    DashboardOverviewComponent,
    WebsiteViewsOverviewComponent,
    DailySalesOverviewComponent,
    ProjectsOverviewComponent
  ],
  imports: [
    SharedModule,
    MainRoutingModule,
    CommonModule
  ]
})
export class MainModule { }