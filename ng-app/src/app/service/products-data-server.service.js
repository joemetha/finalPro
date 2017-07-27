"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var http_1 = require('@angular/http');
var Rx_1 = require("rxjs/Rx");
var ProductsDataServerService = (function () {
    function ProductsDataServerService(http) {
        this.http = http;
    }
    ProductsDataServerService.prototype.getProductsData = function () {
        var productArray;
        return this.http.get('http://localhost:8080/product')
            .map(function (res) { return res.json(); });
    };
    /*getStudent(id:number){
      let student:Student;
      return this.http.get('http://localhost:8080/student/'+id)
        .map((res:Response) => {
          if (res) {
            if (res.status === 200) {
              return res.json()
            }
            if (res.status === 204){
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
  
  
    }*/
    ProductsDataServerService.prototype.addProduct = function (product, file) {
        var _this = this;
        var formData = new FormData();
        var fileName;
        formData.append('file', file);
        return this.http.post('http://localhost:8080/product/image', formData).flatMap(function (filename) {
            product.image = filename.text();
            var headers = new http_1.Headers({ 'Content-Type': 'application/json' });
            var options = new http_1.RequestOptions({ headers: headers, method: 'post' });
            var body = JSON.stringify(product);
            return _this.http.post('http://localhost:8080/product', body, options).map(function (res) { return res.json(); }).catch(function (error) { return Rx_1.Observable.throw(new Error(error.status)); });
        });
    };
    ProductsDataServerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [http_1.Http])
    ], ProductsDataServerService);
    return ProductsDataServerService;
}());
exports.ProductsDataServerService = ProductsDataServerService;
//# sourceMappingURL=products-data-server.service.js.map