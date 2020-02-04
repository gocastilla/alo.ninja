import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Project } from '../models/project.interface';

@Component({
  selector: 'alo-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent {
  projects: Project[];

  constructor(private appService: AppService) {
    this.projects = this.appService.getData().projects;
  }
}
