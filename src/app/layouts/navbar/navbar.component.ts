import {Component, OnInit} from '@angular/core';
import {NzDrawerService} from 'ng-zorro-antd';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  visible = false;

  constructor(private drawerService: NzDrawerService) {
  }

  ngOnInit() {
  }

  open(): void {
    this.visible = true;
  }

}
