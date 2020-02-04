import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Project } from 'src/app/models/project.interface';
import { AppService } from 'src/app/app.service';

@Component({
  selector: 'alo-porject',
  template: `
    <p>
      {{ project | json }}
    </p>
  `,
  styleUrls: ['./porject.component.css']
})
export class PorjectComponent {
  project: Project;
  constructor(private activatedRoute: ActivatedRoute, private appService: AppService) {
    this.activatedRoute.params.subscribe(params => {
      this.project = this.appService.getProject(params.projectId);
    });
  }
}
