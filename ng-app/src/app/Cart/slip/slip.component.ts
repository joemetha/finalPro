import {Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import {Product} from "../../products/product";
import {ProductsDataServerService} from "../../service/products-data-server.service";
import {Router} from "@angular/router";
import {AuthenticationService} from "../../service/authentication.service";

@Component({
  selector: 'app-slip',
  templateUrl: './slip.component.html',
  styleUrls: ['./slip.component.css']
})
export class SlipComponent implements OnInit {

  products: Product[]=[];


  constructor (private productDataService : ProductsDataServerService, private router: Router, private authenService:AuthenticationService){}

  ngOnInit(){
    this.products= this.productDataService.getCart();
  }

  showPrice(){
    var x=0;
    this.products.forEach(product=>{
      x+=product.price
    });
    return x;

  }

  showQuantity(){
    var x=0;
    this.products.forEach(product=>{
      x+=1
    });
    return x;
  }


  purches() {

    this.products.forEach(product=>{

      //this.productDataService.addPurches(product);

    });
    this.productDataService.clearCart();
    alert("Purchesing success");
    this.router.navigate(['/moneyTrans']);
  }


}
