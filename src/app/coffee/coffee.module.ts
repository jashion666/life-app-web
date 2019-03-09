import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {CoffeeComponent} from './coffee.component';
import {RouterModule} from '@angular/router';
import {COFFEE_ROUTE} from './coffee.route';

@NgModule({
  declarations: [CoffeeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([COFFEE_ROUTE])
  ]
})
export class CoffeeModule {
}
