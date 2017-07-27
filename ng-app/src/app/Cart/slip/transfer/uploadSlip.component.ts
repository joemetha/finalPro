import {Component, ElementRef, ViewChild} from "@angular/core";
import {AuthenticationService} from "../../../service/authentication.service";
import {Router} from "@angular/router";
import {ProductsDataServerService} from "../../../service/products-data-server.service";
import {Slip} from "./slip";
@Component({
  selector: 'app-Slipping',
  templateUrl: './uploadSlip.component.html'
})
export class UploadSlipComponent {

  slip: any={};
  constructor (private productDataService : ProductsDataServerService, private router: Router, private authenService:AuthenticationService){}
  ngOnInit(){
    this.slip=new Slip();
  }

  @ViewChild('fileInput') inputEl: ElementRef
  addSlip(slip:Slip){
    let result: Slip;
    console.log(slip)
   // let inputEl: HTMLInputElement = this.inputEl.nativeElement;

    this.productDataService.addSlip(slip).subscribe(resultProduct => {
      result = resultProduct
      if (result != null) {
        this.router.navigate(['/allProduct']);
      }
      else {
        alert("Error in editing the product")
      }
    })

  }

  onFileChange(event,slip:any){
    var filename= event.target.files[0].name;
    console.log(filename);
    slip.image=filename;
  }


}
