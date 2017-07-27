import {Component} from "@angular/core";
import {AuthenticationService} from "../../../service/authentication.service";
import {Router} from "@angular/router";
import {ProductsDataServerService} from "../../../service/products-data-server.service";
@Component({
  selector: 'app-Transfer',
  templateUrl: './transfer.component.ts.html'
})
export class TransferComponent {
  constructor (private productDataService : ProductsDataServerService, private router: Router, private authenService:AuthenticationService){}


  uploadSlip() {
    this.router.navigate(['/uploadSlip']);
  }
}
