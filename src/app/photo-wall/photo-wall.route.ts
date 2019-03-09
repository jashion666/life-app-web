import {Route} from '@angular/router';
import {PhotoWallComponent} from './photo-wall.component';

export const PHOTO_WALL_ROUTE: Route = {
  path: 'photo_wall',
  component: PhotoWallComponent,
  // canActivate: [UserRouteAccessService],
  data: {
    authorities: [],
    pageTitle: '照片墙'
  }
};
