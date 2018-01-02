import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-authorization',
  templateUrl: 'authorization.html',
  styleUrls: ['authorization.css']
})

export class AuthorizationComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }
}
