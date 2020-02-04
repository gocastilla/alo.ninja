import { Component, OnInit, OnDestroy } from '@angular/core';
import { AppService } from './app.service';
import { Meta, Title } from '@angular/platform-browser';
import { MainDescription } from './models/main-description.interface';
// import { NgcCookieConsentService } from 'ngx-cookieconsent';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  constructor() // private activatedRoute: ActivatedRoute,
  // private appService: AppService,
  // private meta: Meta,
  // private title: Title,
  // private ccService: NgcCookieConsentService

  {}

  data: MainDescription;

  ngOnInit() {
    // this.activatedRoute.data.subscribe(data => {
    //   this.stockLoads = data.stockLoads;
    //   this.filteredStockLoads = data.stockLoads;
    // });
    // this.appService.getData().subscribe( res => {
    //   this.data = res;
    //   this.title.setTitle(this.data.title);
    //   this.meta.addTags(this.data.metas);
    // });
  }
}
