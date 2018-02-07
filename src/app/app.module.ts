import { AppComponent } from './app.component';
import {RegistrationComponent} from './registration/registration.form';
import {AuthorizationComponent} from './autorization/authorization.form';
import {HttpModule} from '@angular/http';
import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {RouterModule} from '@angular/router';
import {FormsModule} from '@angular/forms';



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
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
