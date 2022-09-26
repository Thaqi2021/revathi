import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

import {MatDialog, MatDialogRef} from '@angular/material/dialog';
import { User } from '../user';
import { LoginUserService } from '../login-user.service';
import { Router } from '@angular/router';

// CommonJS
@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss'],
  encapsulation: ViewEncapsulation.None,

})
export class SignUpComponent implements OnInit {

  newUser: FormGroup;
  companyname!:String;
  constructor( private loginUserService :LoginUserService,private router: Router) {
    this.newUser = new FormGroup({
      username: new FormControl('', {
        validators: [Validators.required]
      }),
      email: new FormControl('', [Validators.required, Validators.email]),
      mobile_no: new FormControl('',{
        validators: [Validators.required]
      }),
      password: new FormControl('', {
        validators: [Validators.required]
      }),
      con_password: new FormControl('',{
        validators: [Validators.required]

      }),
      address: new FormControl('',{
        validators: [Validators.required]
      }),
      city: new FormControl('',{
        validators: [Validators.required]
      }),
      postalCode: new FormControl('', {
        validators: [Validators.required]
      })
    })
   }

  ngOnInit(): void {
  }
  submit() {
    const user = new User();
    user.name = this.newUser.value.username;
    user.email = this.newUser.value.email;
    user.mobile_num = this.newUser.value.mobile_no;
    user.password = this.newUser.value.password;
    user.address = this.newUser.value.address;
    user.city = this.newUser.value.city;
    user.pincode = this.newUser.value.postalCode;
    this.loginUserService.saveNewUser(user).subscribe(rees => {
      // swal({
      //   title: "Good job!",
      //   text: "You clicked the button!",
      //   icon: "success",
      // });
      console.log("working fine"+rees);
  })
}

}
