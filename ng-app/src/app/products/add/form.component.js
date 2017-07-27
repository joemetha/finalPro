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
var product_1 = require('./product');
var products_data_file_service_1 = require('../services/products-data-file.service');
var router_1 = require('@angular/router');
var FormComponent = (function () {
    function FormComponent(productDataService, router) {
        this.productDataService = productDataService;
        this.router = router;
        this.product = {};
    }
    ;
    FormComponent.prototype.ngOnInit = function () {
        this.product = new product_1.Product();
    };
    FormComponent.prototype.addProduct = function (product) {
        var _this = this;
        var result;
        console.log(product);
        var inputEl = this.inputEl.nativeElement;
        this.productDataService.addProduct(product, inputEl.files.item(0)).subscribe(function (resultProduct) {
            result = resultProduct;
            if (result != null) {
                _this.router.navigate(['/all']);
            }
            else {
                alert("Error in adding the student");
            }
        });
    };
    FormComponent.prototype.onFileChange = function (event, product) {
        var filename = event.target.files[0].name;
        console.log(filename);
        product.image = filename;
    };
    __decorate([
        core_1.ViewChild('fileInput'), 
        __metadata('design:type', core_1.ElementRef)
    ], FormComponent.prototype, "inputEl", void 0);
    FormComponent = __decorate([
        core_1.Component({
            selector: 'form',
            templateUrl: 'app/products/form.component.html',
            styleUrls: ['app/students/students.component.css']
        }), 
        __metadata('design:paramtypes', [products_data_file_service_1.ProductsDataFileService, router_1.Router])
    ], FormComponent);
    return FormComponent;
}());
exports.FormComponent = FormComponent;
//# sourceMappingURL=form.component.js.map