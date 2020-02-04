import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProjectsComponent } from './projects.component';
import { PorjectComponent } from '../project/containers/porject/porject.component';

const routes: Routes = [
  { path: '', component: ProjectsComponent },
  { path: ':projectId', component: PorjectComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProjectsRoutingModule { }
