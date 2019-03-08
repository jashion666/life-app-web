import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']

})
export class MainComponent implements OnInit {

  loadingComplete = false;
  percentage: number;

  constructor() {
  }

  ngOnInit() {
    this.loading();
  }

  logoutListener(event) {
    if (event) {
      this.loadingComplete = false;
      this.loading();
    }
  }

  loading() {
    this.percentage = 0;
    const loadingInterval = setInterval(() => {
      if (this.percentage === 100) {
        this.loadingComplete = true;
        clearInterval(loadingInterval);
      }
      this.percentage = this.percentage + 50;
    }, 1000);
  }

}
