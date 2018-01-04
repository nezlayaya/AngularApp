import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'app-authorization',
  templateUrl: 'authorization.html',
  styleUrls: ['authorization.css']
})

export class AuthorizationComponent implements OnInit {
  constructor(public http: Http) {
  }

  getJSON() {
    this.http.get('./names.json')
      .subscribe((res: any) => {
        console.log(res);
      });
  }

  ngOnInit() {
    this.getJSON();
  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }
}
