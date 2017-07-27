import {Component} from '@angular/core';
import {Router} from "@angular/router";
import {AuthenticationService} from "./service/authentication.service";
@Component({
 selector: 'my-app',
 templateUrl : './app.component.html'
})
export class AppComponent {
	name = 'JB CAMERA';

  constructor( private router: Router, private authenService:AuthenticationService) {}

  hasRole(role:string){
    return this.authenService.hasRole(role);
  }

  notHasRole(role:string){
    return this.authenService.notHasRole(role);
  }



}
