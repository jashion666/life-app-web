import {AppModel} from '../core/model/app.model';

export interface IPhotoWallModel {
  title?: string;
  description?: string;
  picSrc?: string;
}

export class PhotoEntity implements IPhotoWallModel {

  constructor(
    public title?: string,
    public description?: string,
    public picSrc?: string,
  ) {
    this.title = this.title ? this.title : '';
    this.description = this.description ? this.description : '';
    this.picSrc = this.picSrc ? this.picSrc : '';
  }

}

export class PhotoWallModel extends AppModel {

  photoList: PhotoEntity[];

  constructor() {
    super();
  }

}
