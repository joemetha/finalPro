import {Component} from '@angular/core';
import {AuthenticationService} from "../service/authentication.service";
import {Router} from "@angular/router";
@Component({
  selector: 'menu',
  templateUrl: './menu.component.html',
  styleUrls:['./menu.component.css']
})
export class MenuComponent {
  constructor( private router: Router, private authenService:AuthenticationService) {}

  hasRole(role:string){
    return this.authenService.hasRole(role);
  }

}
