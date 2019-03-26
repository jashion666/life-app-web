import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-photo-wall',
  templateUrl: './photo-wall.component.html',
  styleUrls: ['./photo-wall.component.scss']
})
export class PhotoWallComponent implements OnInit {

  picList: any[];

  constructor() {
  }

  ngOnInit() {
    this.picList = [];
    for (let i = 0; i < 5; i++) {
      this.picList.push(i);
    }
  }

}
