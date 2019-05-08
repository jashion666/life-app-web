import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {PHOTO_WALL_ROUTE} from './photo-wall.route';
import {PhotoWallComponent} from './photo-wall.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';
import {SharedModule} from '../shared/shared.module';
import {LazyLoadImageModule} from 'ng-lazyload-image';

@NgModule({
  declarations: [PhotoWallComponent],
  imports: [
    CommonModule, RouterModule.forChild([PHOTO_WALL_ROUTE]),
    NgZorroAntdModule, SharedModule, LazyLoadImageModule
  ]
})
export class PhotoWallModule {
}
