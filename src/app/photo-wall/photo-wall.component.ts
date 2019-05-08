import {Component, OnInit} from '@angular/core';
import {PhotoWallService} from './photo-wall.service';
import {PhotoWallModel} from './photo-wall.model';

@Component({
  selector: 'app-photo-wall',
  templateUrl: './photo-wall.component.html',
  styleUrls: ['./photo-wall.component.scss']
})
export class PhotoWallComponent implements OnInit {

  photoWallModel: PhotoWallModel;
  loading: boolean;
  loadingDetail: boolean;
  defaultImage = '../../assets/img/blank.jpg';
  coverImgIndex: any;

  constructor(private photoWallService: PhotoWallService) {
    this.photoWallModel = new PhotoWallModel();
  }

  ngOnInit() {
    this.loading = true;
    this.loadingDetail = false;
    this.loadPhoto();
  }

  loadPhoto() {
    this.photoWallService.getPhoto(this.photoWallModel.pageIndex).subscribe(data => {
      setTimeout(() => {
        this.photoWallModel.photoList = this.photoWallModel.photoList
          ? this.photoWallModel.photoList.concat(data.photoList)
          : data.photoList;
        this.photoWallModel.hasNextPage = data.hasNextPage;
        this.photoWallModel.pageIndex = data.pageIndex;
        this.loading = false;
        this.loadingDetail = false;
      }, 1000);
    });
  }

  loadMore() {
    this.loadingDetail = true;
    this.photoWallModel.pageIndex++;
    this.loadPhoto();
  }

}
