import {Injectable} from '@angular/core';

import {Http, Headers, Response, RequestOptions,URLSearchParams} from '@angular/http';
import {Observable, Subscriber} from "rxjs/Rx";
import {Product} from "../products/product";
import {Slip} from "../Cart/slip/transfer/slip";
import {User} from "../User/User";


@Injectable()
export class ProductsDataServerService {
  carts:Product[]=[];

  constructor(private http: Http){}

  getProductsData(){
    let productArray: Product[];
    return this.http.get('http://52.32.22.194:8080/FinalPro/product')
      .map(res => res.json());

  }

  getProduct(id: number) {
    let product: Product;
    return this.http.get('http://52.32.22.194:8080/FinalPro/product/'+ id)
      .map((res: Response) => {
        if (res) {
          if (res.status === 200) {
            return res.json()
          }
          if (res.status === 204) {
            return null;
          }
        }
      })
      .catch((error: any) => {
        if (error.status === 500) {
          return Observable.throw(new Error(error.status));
        }
        else if (error.status === 400) {
          return Observable.throw(new Error(error.status));
        }
        else if (error.status === 409) {
          return Observable.throw(new Error(error.status));
        }
        else if (error.status === 406) {
          return Observable.throw(new Error(error.status));
        }
        return error;
      })
      ;


  }

  deleteProduct(id: number) {

  this.http.delete('http://52.32.22.194:8080/FinalPro/product/'+ id).subscribe(res => console.log(res))

  }


  addProduct(product:Product, file: any){
    let formData = new FormData();
    let fileName : string;
    formData.append('file', file);
    return this.http.post('http://52.32.22.194:8080/FinalPro/product/image', formData).flatMap(filename => {
      product.image = filename.text();
      let headers = new Headers({'Content-Type' : 'application/json'})
      let options = new RequestOptions({headers : headers, method : 'post'})
      let body = JSON.stringify(product)
      return this.http.post('http://52.32.22.194:8080/FinalPro/product', body ,options).map(res => res.json()).catch((error: any) => Observable.throw(new Error(error.status)))
    })
  }

  addSlip(slip:Slip){

      let headers = new Headers({'Content-Type' : 'application/json'})
      let options = new RequestOptions({headers : headers, method : 'post'})
      let body = JSON.stringify(slip)
      return this.http.post('http://52.32.22.194:8080/FinalPro/slipping', body ,options).map(res => res.json()).catch((error: any) => Observable.throw(new Error(error.status)))

  }

  addOnlyProduct(product:Product){
    let headers = new Headers({'Content-Type' : 'application/json'})
    let options = new RequestOptions({headers : headers, method : 'post'})
    let body = JSON.stringify(product)
    return this.http.post('http://52.32.22.194:8080/FinalPro/product', body ,options).map(res => res.json()).catch((error: any) => Observable.throw(new Error(error.status)))
  }


  findProduct(search:string){
    let product: Product;
    let params: URLSearchParams = new URLSearchParams();
    params.set('search', search);
    return this.http.get('http://52.32.22.194:8080/FinalPro/products',{search:params})
      .map(res => res.json());
  }


  findUser(search:string){
    let user: User;
    let params: URLSearchParams = new URLSearchParams();
    params.set('search', search);
    return this.http.get('http://52.32.22.194:8080/FinalPro/users',{search:params})
      .map(res => res.json());
  }

  getCart(){
    return JSON.parse(localStorage.getItem('currentCart'));
  }

  deleteCart(id){
    this.carts = this.carts.filter(product => product.id != id);

    localStorage.setItem('currentCart', JSON.stringify(this.carts));
  }


  addCart(product:Product){
    product.id=this.carts.length+1;
    this.carts.push(product);
    localStorage.setItem('currentCart', JSON.stringify(this.carts));
  }


  clearCart(){
    while (this.carts.length!=0){this.carts.pop();}
    localStorage.setItem('currentCart', JSON.stringify(this.carts));
  }




  addPurches(product:Product){
    let headers = new Headers({'Content-Type' : 'application/json'})
    let options = new RequestOptions({headers : headers, method : 'post'})
    let body = JSON.stringify(product)
    return this.http.post('http://52.32.22.194:8080/FinalPro/purches', body ,options).map(res => res.json()).catch((error: any) => Observable.throw(new Error(error.status)))
  }

}
