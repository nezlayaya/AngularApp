import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';

@Component({
  selector: 'app-authorization',
  templateUrl: 'authorization.html',
  styleUrls: ['authorization.css']
})

export class AuthorizationComponent implements OnInit {
  constructor(
    public http: Http
  ) { }

  ngOnInit() {
    this.http.get('').subscribe(data => {
      console.log(data);
    });
  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }
}
