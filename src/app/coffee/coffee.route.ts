import {Route} from '@angular/router';
import {CoffeeComponent} from './coffee.component';

export const COFFEE_ROUTE: Route = {
  path: 'coffee',
  component: CoffeeComponent,
  // canActivate: [UserRouteAccessService],
  data: {
    authorities: [],
    pageTitle: '咖啡'
  }
};
