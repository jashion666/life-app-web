import {Component, Input, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, OnDestroy {

  isLoadingTwo: boolean;
  array = [1, 2, 3, 4];

  @Input() visible: boolean;

  constructor() {
  }

  ngOnInit() {
    this.isLoadingTwo = false;
  }

  loadTwo(): void {
    this.isLoadingTwo = true;
    setTimeout(() => {
      this.isLoadingTwo = false;
    }, 60000);
  }

  close(): void {
    this.visible = false;
  }

  ngOnDestroy(): void {
    console.log('关闭');
    this.isLoadingTwo = false;
  }
}
