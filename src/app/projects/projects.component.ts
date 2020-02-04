import { Component } from '@angular/core';
import { AppService } from '../app.service';
import { Project } from '../models/project.interface';

@Component({
  selector: 'alo-projects',
  template: `
    <h1>
      Listado de proyectos
    </h1>

    <ul *ngFor="let project of projects">
      <li [routerLink]="project.id">{{ project.title }}</li>
    </ul>
  `,
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent {
  projects: Project[];

  constructor(private appService: AppService) {
    this.projects = this.appService.getData().projects;
  }
}
