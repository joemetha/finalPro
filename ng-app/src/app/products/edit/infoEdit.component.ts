import {Component, ViewChild, ElementRef} from "@angular/core";
import {ActivatedRoute, Router, Params} from "@angular/router";
import {ProductsDataServerService} from "../../service/products-data-server.service";
import {Product} from "../product";
@Component({
  selector: 'form-edit',
  templateUrl: './infoEdit.component.html'
})
export class InfoEditComponent {
  constructor(private route: ActivatedRoute, private productDataService: ProductsDataServerService, private router: Router) {
  }

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
  @ViewChild('fileInput') inputEl: ElementRef

  addProduct(product: Product) {
    let result: Product;
    console.log(product)
    let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    if(inputEl.files.length>0) {

      this.productDataService.addProduct(product, inputEl.files.item(0)).subscribe(resultProduct => {
        result = resultProduct
        if (result != null) {
          this.router.navigate(['/allProduct']);
        }
        else {
          alert("Error in editing the product")
        }
      })


    }
    else{

      this.productDataService.addOnlyProduct(product).subscribe(resultProduct => {
        result = resultProduct
        if (result != null) {
          this.router.navigate(['/allProduct']);
        }
        else {
          alert("Error in editing the product")
        }
      })

    }

  }

  onFileChange(event, product: any) {
    var filename = event.target.files[0].name;
    console.log(filename);
    product.image = filename;
  }


}
