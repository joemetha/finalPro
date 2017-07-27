import {Injectable} from '@angular/core';
import {Product} from '../products/product';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ProductsDataFileService{
	constructor(private http: Http){}
	getProductsData(){
    let productArray: Product[];
		return this.http.get('app/data/product.json').map(res => res.json().products);
	}

  addProduct(product:Product, imageFile : any){
    return null;
  }

  getProduct(id:number){
    return null;
  }

  findProduct (search:string){
    return null;
  }
  addCart(product:Product){

  }

  getCart(){
    let cartArray:Product[];
    return this.http.get('app/data/product.json')
      .map(res => res.json().carts);
  }

}
