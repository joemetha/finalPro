import {Component} from "@angular/core";
import {ProductsDataServerService} from "../service/products-data-server.service";
import {Router} from "@angular/router";
import {User} from "./User";
@Component({
  selector: 'find-user',
  templateUrl: './findUser.component.html'
})
export class FindUserComponent {
  users: User[]=[];
  search:string;

  constructor (private productDataService : ProductsDataServerService, private router: Router){}

  onSearch(){
    this.productDataService.findUser(this.search)
      .subscribe(users => this.users = users);

  }




}
