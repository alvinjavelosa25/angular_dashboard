import { Component, ViewEncapsulation } from '@angular/core';
import {  IProjectOverview, ReportsService } from '../../services/reports.service';

@Component({
  selector: 'app-projects-overview',
  templateUrl: './projects-overview.component.html',
  styleUrls: ['./projects-overview.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class ProjectsOverviewComponent {
  
  projectOverview: IProjectOverview[] = [];

  constructor(
    private reportsService: ReportsService
  ) {
    this.reportsService.getProjectsOverview().subscribe((result) => {
      this.projectOverview = result;
      // console.log('projectOverview', this.projectOverview);
    })
  }

  displayedColumns: string[] = ['title', 'members', 'budget', 'progressPercentage'];
  dataSource = this.projectOverview;
}

