import {Component, OnInit} from '@angular/core';


@Component({
  selector: 'app-registration',
  templateUrl: 'registration.form.html',
  styleUrls: ['registration.form.css']
})

export class RegistrationComponent implements OnInit {
  constructor() { }

  ngOnInit() {
  }

  onSubmit(form: any): void {
    console.log('you submitted value:', form);
  }
}
