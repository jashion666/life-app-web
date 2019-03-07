import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    this.getTest().subscribe(data => {
      console.log(data);
    });
  }

  getTest(): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>('/demo/test');
  }

}
