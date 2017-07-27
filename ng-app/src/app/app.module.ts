import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';

import {TimeComponent} from './time/time.component';
import {FormsModule} from '@angular/forms';

import {HttpModule} from '@angular/http';
import {MenuComponent} from './menu/menu.component';
import {FileNotFoundComponent} from './filenotfound/file-not-found.component';
import {AppRoutingModule} from './app-routing.module';

import {LocationStrategy, HashLocationStrategy} from '@angular/common';


import {LoginComponent} from './login/login.component';
import {AuthenticationService} from './service/authentication.service';
import {ProductsComponent} from "./products/allPorduct/products.component";
import {FormComponent} from "./products/add/form.component";
import {ProductRoutingModule} from "./products/product-routing.module";
import {ProductsDataFileService} from "./service/products-data-file.service";
import {ProductsDataServerService} from "./service/products-data-server.service";
import {ViewComponent} from "./products/view/view.component";
import {CartComponent} from "./Cart/cart.component";
import { EditComponent } from './products/edit/edit.component';
import {InfoEditComponent} from "./products/edit/infoEdit.component";
import { SlipComponent } from './Cart/slip/slip.component';
import {TransferComponent} from "./Cart/slip/transfer/transfer.component";
import {UploadSlipComponent} from "./Cart/slip/transfer/uploadSlip.component";
import {FindUserComponent} from "./User/findUser.component";
import {AddUserComponent} from "./User/addUser.component";



@NgModule({
  declarations: [AppComponent,
    ProductsComponent,
    FormComponent,
    ViewComponent,
    CartComponent,
    TimeComponent,
    MenuComponent, FileNotFoundComponent,
    LoginComponent,
    EditComponent,
    InfoEditComponent,
    SlipComponent,
    TransferComponent,
    UploadSlipComponent,
    FindUserComponent,
    AddUserComponent
  ],
  imports: [BrowserModule, FormsModule, HttpModule,
    ProductRoutingModule, AppRoutingModule],
  bootstrap: [AppComponent],
  providers: [ProductsDataServerService,
    // {provide: LocationStrategy, useClass: HashLocationStrategy},

    AuthenticationService
  ]
})
export class AppModule {
}
