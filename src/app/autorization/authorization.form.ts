import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-authorization',
  templateUrl: 'authorization-form.html',
  styleUrls: ['authorization-form.css']
})

export class AuthorizationComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }
}
