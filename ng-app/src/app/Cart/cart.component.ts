import {Component} from '@angular/core';


import {Router, ActivatedRoute, Params} from "@angular/router";
import {Product} from "../products/product";
import {ProductsDataFileService} from "../service/products-data-file.service";
import {ProductsDataServerService} from "../service/products-data-server.service";
import {AuthenticationService} from "../service/authentication.service";


@Component({
  selector: 'cart',
  templateUrl: './cart.component.html'
})
export class CartComponent {
  products: Product[]=[];


  constructor (private productDataService : ProductsDataServerService, private router: Router, private authenService:AuthenticationService){}

  ngOnInit(){
       this.products= this.productDataService.getCart();
  }

  deleteCart(product: Product){
       this.productDataService.deleteCart(product.id);
    this.products= this.productDataService.getCart();
  }

  showPrice(){
    var x=0;
    this.products.forEach(product=>{
      x+=product.price
    });
    return x;

  }

  hasRole(role:string){
    return this.authenService.hasRole(role);
  }

  notHasRole(role:string){
    return this.authenService.notHasRole(role);
  }

  goSlip(){
    if(this.authenService.hasRole('ADMIN,USER,SHOPKEEPER')==true) {
      this.router.navigate(['/slip']);
    }
    else{
      this.router.navigate(['/login']);
    }
  }

}
