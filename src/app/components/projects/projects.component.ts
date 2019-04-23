import { Component, Input } from '@angular/core';
import { Project } from '../../models/project.interface';


@Component({
  selector: 'alo-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.sass']
})
export class ProjectsComponent {
  @Input() projects: Project[];

  constructor() {}
}
