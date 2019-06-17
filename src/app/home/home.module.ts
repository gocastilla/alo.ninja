import { NgModule } from '@angular/core';

import { HomeComponent } from './containers/home.component';
import { HomeRoutingModule } from './home-routing';
import { DescriptionComponent } from './components/description/description.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { ConfirmDialog } from './components/confirm-dialog/confirm-dialog.component';
import { AppService } from '../app.service';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    HomeRoutingModule,
    FlexLayoutModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule
  ],
  declarations: [HomeComponent, DescriptionComponent, ProjectsComponent, SocialLinksComponent, ConfirmDialog],
  entryComponents: [ConfirmDialog],
  providers: [AppService]
})
export class HomeModule {}
