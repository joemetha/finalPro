import {NgModule, Component}              from '@angular/core';
import {RouterModule, Routes}  from '@angular/router';
import {FormComponent} from "./add/form.component";
import {ProductsComponent} from "./allPorduct/products.component";
import {ViewComponent} from "./view/view.component";
import {CartComponent} from "../Cart/cart.component";
import {EditComponent} from "./edit/edit.component";
import {InfoEditComponent} from "./edit/infoEdit.component";
import {SlipComponent} from "../Cart/slip/slip.component";
import {TransferComponent} from "../Cart/slip/transfer/transfer.component";
import {UploadSlipComponent} from "../Cart/slip/transfer/uploadSlip.component";
import {FindUserComponent} from "../User/findUser.component";
import {AddUserComponent} from "../User/addUser.component";


const productRoutes: Routes = [
  {path: 'detail/:id',component:ViewComponent},
  {path: 'addProduct', component: FormComponent},
  {path: 'allProduct', component: ProductsComponent},
  {path: 'cart', component: CartComponent},
  {path: 'editProduct', component: EditComponent},
  {path: 'edit/:id', component: InfoEditComponent},
  {path: 'slip', component: SlipComponent},
  {path: 'moneyTrans', component: TransferComponent},
  {path: 'uploadSlip', component: UploadSlipComponent},
  {path: 'findUser', component: FindUserComponent},
  {path: 'addUser', component: AddUserComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(productRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class ProductRoutingModule {
}
