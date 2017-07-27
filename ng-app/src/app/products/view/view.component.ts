import {Component} from '@angular/core';
import {Product} from '../product';

import {Router, ActivatedRoute, Params} from "@angular/router";
import {ProductsDataFileService} from "../../service/products-data-file.service";
import {ProductsDataServerService} from "../../service/products-data-server.service";

@Component({
  selector: 'view-products',
  templateUrl: './view.component.html'
})
export class ViewComponent {
  constructor (private route: ActivatedRoute, private productDataService : ProductsDataServerService, private router: Router){}

  product: Product;
  isNoData: boolean;
  ngOnInit() {
    this.isNoData = false;
    //this.inputCount = 15;
    this.route.params
      .switchMap((params: Params) => this.productDataService.getProduct(+params['id']))
      .subscribe((product: Product) => {
          if (product !== null)
            this.product = product;
          else
            this.isNoData = true;
        }
      );
  }

  addCart(product: Product){
    console.log(product)
    this.productDataService.addCart(product);
    alert("Add complete!!");
    this.router.navigate(['/allProduct']);
  }


}
