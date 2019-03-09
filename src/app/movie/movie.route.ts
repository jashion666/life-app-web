import {Route} from '@angular/router';
import {MovieComponent} from './movie.component';

export const MOVIE_ROUTE: Route = {
  path: 'movie',
  component: MovieComponent,
  // canActivate: [UserRouteAccessService],
  data: {
    authorities: [],
    pageTitle: '电影'
  }
};
