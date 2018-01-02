import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RegistrationComponent} from './registration/registration.form';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';
import {AuthorizationComponent} from './autorization/authorization.form';



const routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full' },
  {path: 'registration', component: RegistrationComponent},
  {path: 'authorization', component: AuthorizationComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AuthorizationComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
