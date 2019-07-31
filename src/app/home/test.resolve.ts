// import { Injectable } from '@angular/core';
// import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
// import { Observable } from 'rxjs';
// import { AppService } from '../app.service';

// @Injectable({
//   providedIn: 'root'
// })
// export class TestasoResolve implements Resolve<any> {
//   constructor(private service: AppService) {}

//   resolve(route: ActivatedRouteSnapshot): Observable<any> {
//     return this.service.getAsyncData();
//   }
// }

import { Inject, Injectable, PLATFORM_ID } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { first, tap } from 'rxjs/operators';
import { isPlatformServer } from '@angular/common';
import { makeStateKey, TransferState } from '@angular/platform-browser';
import { AppService } from '../app.service';
import { MainDescription } from '../models/main-description.interface';

const MAIN_DESCRIPTION_KEY = makeStateKey('people');

@Injectable()
export class TestasoResolve implements Resolve<any> {
  constructor(
    private service: AppService,
    @Inject(PLATFORM_ID) private platformId,
    private transferState: TransferState
  ) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<MainDescription> {
    const cacheId = 1;

    const TESTASO_KEY = makeStateKey<any>('cacheId-' + cacheId);

    if (this.transferState.hasKey(TESTASO_KEY)) {
      const course = this.transferState.get<any>(TESTASO_KEY, null);

      this.transferState.remove(TESTASO_KEY);

      return of(course);
    } else {
      return this.service.getData().pipe(
        // first(),
        tap(res => {
          if (isPlatformServer(this.platformId)) {
            console.log('res', res);
            this.transferState.set(TESTASO_KEY, res);
          }
        })
      );
      // return this.service.getData().pipe(
      //   first(),
      //   tap(res => {
      //     if (isPlatformServer(this.platformId)) {
      //       this.transferState.set(TESTASO_KEY, res);
      //     }
      //   })
      // );
    }
  }
}
