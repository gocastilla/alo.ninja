import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './containers/home.component';
import { TestasoResolve } from './test.resolve';

export const HomeRoutes: Routes = [
  {
    path: '',
    component: HomeComponent,
    // resolve: TestasoResolve
  }
];

@NgModule({
  imports: [RouterModule.forChild(HomeRoutes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {}
