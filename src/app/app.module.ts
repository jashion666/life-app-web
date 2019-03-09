import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {NgZorroAntdModule, NZ_I18N, zh_CN} from 'ng-zorro-antd';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {registerLocaleData} from '@angular/common';
import zh from '@angular/common/locales/zh';
import {MainComponent} from './layouts/main/main.component';
import {NavbarComponent} from './layouts/navbar/navbar.component';
import {RegisterComponent} from './core/user/register/register.component';
import {MovieModule} from './movie/movie.module';
import {PhotoWallModule} from './photo-wall/photo-wall.module';
import {HomeModule} from './home/home.module';
import {CoffeeModule} from './coffee/coffee.module';

registerLocaleData(zh);

@NgModule({
  declarations: [MainComponent, NavbarComponent, RegisterComponent
  ],
  imports: [
    HomeModule,
    MovieModule,
    PhotoWallModule,
    CoffeeModule,
    BrowserModule,
    AppRoutingModule,
    NgZorroAntdModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule
  ],
  providers: [{provide: NZ_I18N, useValue: zh_CN}],
  bootstrap: [MainComponent]
})
export class AppModule {
}
