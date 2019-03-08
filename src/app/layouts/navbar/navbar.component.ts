import {AfterViewInit, Component, OnInit} from '@angular/core';
import {DEFAULT_LOGO} from '../../app.constants';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit, AfterViewInit {

  visible = false;
  logo: string;

  constructor() {
  }

  ngOnInit() {
    this.logo = DEFAULT_LOGO;
  }

  open(): void {
    this.visible = true;
  }

  close(): void {
    this.visible = false;
  }

  toggleLogo() {
    this.logo = this.logo === 'logo-toggle' ? 'logo' : 'logo-toggle';
  }

  ngAfterViewInit(): void {
  }
}
