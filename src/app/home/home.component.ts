import {Component, OnInit} from '@angular/core';
import {HttpClient, HttpResponse} from '@angular/common/http';
import {Observable} from 'rxjs';
// import * as SockJS from 'sockjs-client';
// import * as Stomp from 'webstomp-client';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  stompClient: any;

  constructor(private http: HttpClient) {
  }

  ngOnInit() {
    // this.getTest().subscribe(data => {
    //   console.log(data);
    // });
    this.connect();
  }

  connect() {
    // let socket = new SockJS('//192.168.1.102:8080/mySocket');
    // this.stompClient = Stomp.over(socket);
    // this.stompClient.connect({}, frame => {
    //   console.log(frame);
    //   this.stompClient.subscribe('/topic', body => {
    //     console.log(body);
    //   });
    // });
  }

  getTest(): Observable<HttpResponse<any>> {
    return this.http.get<HttpResponse<any>>('/demo/test');
  }

}
