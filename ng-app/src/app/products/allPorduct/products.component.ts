import {Component} from '@angular/core';
import {Product} from '../product';

import {Router} from "@angular/router";
import {ProductsDataFileService} from "../../service/products-data-file.service";
import {ProductsDataServerService} from "../../service/products-data-server.service";

@Component({
 selector: 'products',
 templateUrl: './products.component.html'
})
export class ProductsComponent {
	products: Product[]=[];
  search:string;

	constructor (private productDataService : ProductsDataServerService, private router: Router){}

  ngOnInit(){
    this.productDataService.getProductsData()
      .subscribe(products => this.products= products);
  }

  onSearch(){
    this.productDataService.findProduct(this.search)
      .subscribe(products => this.products = products);

  }

  showDetail(product: Product){
    this.router.navigate(['/detail',product.id]);
  }


}
