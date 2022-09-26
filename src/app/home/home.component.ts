import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { LoginUserService } from '../login-user.service';
import { Product } from '../product';
import { Router } from '@angular/router';
import { Cart } from '../cart';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  users!: User[];
  // longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  // from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  // originally bred for hunting.`;
  products :Product[]=[];
  is=true;
  constructor(private userService: LoginUserService,private router: Router) { }
  carts:Cart[]=[];
  ngOnInit(): void {
  //   this.userService.findAll().subscribe(data => {
  //     this.users = data;
  // })
   this.userService.getProduct().subscribe(data=>{
      this.products=data;
   })
   if(User.idd==undefined){
    this.is=false;
   }else{
   this.userService.getCart(User.idd).subscribe(data=>{
    if(data.length==0){
      console.log(data.length+"..data..");
      this.is=false;
    }else{
    console.log(data);
    this.carts=data;
    this.is=true;
    if(User.idd!=undefined && this.carts!=undefined){
      for(var i=0;i<this.carts.length;i++){
        for(var j=0;j<this.products.length;j++){
          if(this.carts[i].productName==this.products[j].productName){
            this.products[j].bas=this.carts[i].qty;

          }
        }
      }
    console.log(this.products);
  ``}
    }
  })
   console.log(User.idd);
}}
addtocart(product_id:any){
  if(User.idd==undefined){
    console.log(User.idd +"please login");
    this.router.navigate(['/login']);
  }
  this.userService.addProduct(User.idd,product_id).subscribe(data=>{
    console.log("im added "+product_id+ " <> "+User.idd);
   })
  console.log("im added "+product_id+ " > "+User.idd+"><"+this.carts.length);
  if(User.idd!=undefined && this.carts!=undefined){
    for(var i=0;i<this.carts.length;i++){
      for(var j=0;j<this.products.length;j++){
        if(this.carts[i].productName==this.products[j].productName){
          this.products[j].bas=this.carts[i].qty;

        }
      }
    }
  console.log(this.products);
``}
}

}
