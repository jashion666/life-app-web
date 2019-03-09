import {HomeComponent} from './home.component';
import {Route} from '@angular/router';

export const HOME_ROUTE: Route = {
  path: '',
  component: HomeComponent,
  // canActivate: [UserRouteAccessService],
  data: {
    authorities: [],
    pageTitle: '主页'
  }
};
