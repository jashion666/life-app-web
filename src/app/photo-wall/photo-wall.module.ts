import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {PHOTO_WALL_ROUTE} from './photo-wall.route';
import {PhotoWallComponent} from './photo-wall.component';

@NgModule({
  declarations: [PhotoWallComponent],
  imports: [
    CommonModule, RouterModule.forChild([PHOTO_WALL_ROUTE])
  ]
})
export class PhotoWallModule {
}
