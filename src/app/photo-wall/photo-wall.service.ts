import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {PhotoEntity, PhotoWallModel} from './photo-wall.model';
import {MAX_PAGE_SIZE} from '../app.constants';

@Injectable({
  providedIn: 'root'
})
export class PhotoWallService {

  constructor() {
  }

  getPhoto(pageIndex: number): Observable<any> {

    if (!pageIndex) {
      pageIndex = 1;
    }
    const photoWallModel = new PhotoWallModel();
    const photoList = [];
    const totalSize = 100;
    for (let i = 0; i < 25; i++) {
      photoList.push(
        new PhotoEntity('巴黎  埃菲尔' + i, 'beautiful', '../../assets/img/325912.jpg'),
        new PhotoEntity('巴黎圣母院' + i, 'emmmm', '../../assets/img/749610.jpg'),
        new PhotoEntity('巴厘岛' + i, '梦幻岛', '../../assets/img/541025.jpg'),
        new PhotoEntity('巴黎  埃菲尔' + i, 'beautiful', '../../assets/img/325912.jpg'));
    }

    const beginIndex = (pageIndex - 1) * MAX_PAGE_SIZE;
    photoWallModel.photoList = photoList.splice(beginIndex, MAX_PAGE_SIZE);
    photoWallModel.pageIndex = pageIndex + 1;
    photoWallModel.hasNextPage = beginIndex + MAX_PAGE_SIZE < totalSize;

    return of(photoWallModel);
  }
}
