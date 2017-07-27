import { Component, OnInit } from '@angular/core';
import {Product} from "../product";
import {ProductsDataServerService} from "../../service/products-data-server.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  products: Product[] = [];

  constructor(private productDataService: ProductsDataServerService, private router: Router) {
  }

  ngOnInit() {
    this.productDataService.getProductsData()
      .subscribe(products => this.products = products);
  }

  editDetail(product: Product) {
    this.router.navigate(['/edit', product.id]);
  }
  deleteProduct(product: Product){
    this.productDataService.deleteProduct(product.id);
    this.router.navigate(['/allProduct']);
  }


}
