import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginUserService } from '../login-user.service';
import { User } from '../user';
// import { Store } from '@ngxs/store';
// import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;
   us: User = new User;
  constructor(
    private loginUserService :LoginUserService,
    private router: Router
   ) {
    this.loginForm = new FormGroup({
      email: new FormControl('', {
        validators: [Validators.required, Validators.email]
      }),
      password: new FormControl('', {
        validators: [Validators.required]
      })
    })
  }

  ngOnInit(): void {
  }
  data!:any;

  submit(){
    console.log(this.loginForm.get('email')?.value,this.loginForm.get('password')?.value);
    this.loginUserService.loginUser(this.loginForm.get('email')?.value,this.loginForm.get('password')?.value).subscribe(
      data=>{
        console.log(data);
        console.log(".....................im submit");
        this.us=data;
      this.gotonext(this.us);
    });
  }

  onSubmit() {

  }
  gotonext(user:User){
    console.log(user);
    console.log("working"+user.cust_id);

    User.idd=user.cust_id;
    console.log("working"+ User.idd);
    this.router.navigate(['/home']);


  }


}
