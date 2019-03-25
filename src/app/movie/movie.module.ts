import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieComponent} from './movie.component';
import {RouterModule} from '@angular/router';
import {MOVIE_ROUTE} from './movie.route';
import {NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
  declarations: [MovieComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([MOVIE_ROUTE]),
    NgZorroAntdModule,
  ]
})
export class MovieModule {
}
