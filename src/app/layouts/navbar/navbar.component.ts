import {AfterViewInit, Component, EventEmitter, Input, OnDestroy, OnInit, Output} from '@angular/core';
import {DEFAULT_LOGO} from '../../app.constants';

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
  @Output() logoutEmitter = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
    this.logo = DEFAULT_LOGO;
    // this.loadingInterval = setInterval(() => {
    //   this.toggleLogo();
    // }, 10000);
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
