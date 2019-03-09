import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MovieComponent} from './movie.component';
import {RouterModule} from '@angular/router';
import {MOVIE_ROUTE} from './movie.route';

@NgModule({
  declarations: [MovieComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([MOVIE_ROUTE])
  ]
})
export class MovieModule {
}
