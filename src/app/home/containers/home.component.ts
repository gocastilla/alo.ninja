import { Component, OnInit } from '@angular/core';
import { Meta, Title, TransferState, makeStateKey } from '@angular/platform-browser';
import { MainDescription } from '../../models/main-description.interface';
import { AppService } from '../../app.service';
import { Router, ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';
const MAIN_DESCRIPTION_KEY = makeStateKey('people');

@Component({
  selector: 'alo-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {
  data: MainDescription;
  testaso: any;

  constructor(
    private meta: Meta,
    private title: Title,
    private appService: AppService,
    route: ActivatedRoute,
    private state: TransferState
  ) {
    // this.data = this.appService.getData();
    // console.log(route.snapshot.data);

    // this.testaso = route.snapshot.data;
    // this.data = route.snapshot.data;
    // this.title.setTitle(this.data.title);
    // this.meta.addTags(this.data.metas);

    // this.testaso = route.snapshot.data.testaso;
    // console.log('this.testaso', this.testaso);
  }

  ngOnInit() {
    this.data = this.state.get<MainDescription>(MAIN_DESCRIPTION_KEY, null);
    if (!this.data) {
      this.appService.getData()
        .subscribe(data => {
          console.log('data retrieved from API', data);
          this.data = data;
          this.state.set<MainDescription>(MAIN_DESCRIPTION_KEY, data);
        });
    }
  }
}
