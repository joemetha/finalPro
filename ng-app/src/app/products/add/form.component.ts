import {Component, ViewChild, ElementRef} from '@angular/core';
import {Product} from '../product';

import  {Router} from '@angular/router';
import {ProductsDataFileService} from "../../service/products-data-file.service";
import {ProductsDataServerService} from "../../service/products-data-server.service";

@Component({
 selector: 'form-add',
 templateUrl: './form.component.html'
})
export class FormComponent {
  product: any={};
  constructor (private productDataService:ProductsDataServerService, private router: Router){};
  ngOnInit(){
    this.product=new Product();
  }

  @ViewChild('fileInput') inputEl: ElementRef
  addProduct(product:Product){
    let result: Product;
    console.log(product)
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;

    this.productDataService.addProduct(product, inputEl.files.item(0)).subscribe(resultProduct => {
      result = resultProduct
      if(result != null) {
        this.router.navigate(['/allProduct']);
      }
      else {
        alert("Error in adding the student")
      }
    })
  }

  onFileChange(event,product:any){
    var filename= event.target.files[0].name;
    console.log(filename);
    product.image=filename;
  }

}
