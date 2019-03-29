import {AfterViewInit, Component, EventEmitter, OnDestroy, OnInit, Output} from '@angular/core';
import {Location} from '@angular/common';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit, OnDestroy {

  visible = false;
  logo: string;
  loadingInterval: any;
  isCollapsed = false;
  nzSelected: number;
  urlMap = {'/': 1, '/photo_wall': 2, '/coffee': 3};

  @Output() logoutEmitter = new EventEmitter();

  constructor(public location: Location) {
  }

  ngOnInit() {
    this.nzSelected = this.urlMap[this.location.path()];
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  logout(): void {
    this.logoutEmitter.emit(true);
  }

  toggleLogo() {
    // this.logo = this.logo === 'logo-toggle' ? 'logo' : 'logo-toggle';
  }

  toggleCollapsed(): void {
    this.isCollapsed = !this.isCollapsed;
  }

  ngAfterViewInit(): void {
  }

  ngOnDestroy(): void {
    if (this.loadingInterval) {
      clearInterval(this.loadingInterval);
    }
  }
}
