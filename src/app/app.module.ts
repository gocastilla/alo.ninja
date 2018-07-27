import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import {
  MatButtonModule,
  MatCardModule,
  MatCheckboxModule,
  MatIconModule,
  MatDialogModule
} from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { DescriptionComponent } from './components/description/description.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SocialLinksComponent } from './components/social-links/social-links.component';
import { ConfirmDialog } from './components/confirm-dialog/confirm-dialog.component';
import { AppService } from './app.service';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';

@NgModule({
  declarations: [
    AppComponent,
    DescriptionComponent,
    ProjectsComponent,
    SocialLinksComponent,
    ConfirmDialog
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    BrowserAnimationsModule,
    FlexLayoutModule,
    HttpClientModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatIconModule,
    MatDialogModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [ConfirmDialog],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule {}
