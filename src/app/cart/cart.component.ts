import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cart } from '../cart';
import { LoginUserService } from '../login-user.service';
import { User } from '../user';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})

export class CartComponent implements OnInit {
  displayedColumns = ['item', 'cost'];
  transactions!: Cart[];
  user!:User;
  // transactions: Transaction[] = [
  //   {item: 'Beach ball', cost: 4},
  //   {item: 'Towel', cost: 5},
  //   {item: 'Frisbee', cost: 2},
  //   {item: 'Sunscreen', cost: 4},
  //   {item: 'Cooler', cost: 25},
  //   {item: 'Swim suit', cost: 15},
  // ];

  /** Gets the total cost of all transactions. */
  getTotalCost() {
    // return this.transactions.map(t => t.amount).reduce((acc, value) => acc + value, 0);
  }
  constructor(private userService: LoginUserService,private router: Router) { }
  ngOnInit(): void {
    console.log("im cart controller"+''+User.idd);
    User.idd='1';
    if(User.idd!=undefined){
      console.log("im in cart func"+ User.idd);
      this.userService.getCart(User.idd).subscribe(data=>{
      this.transactions=data;
   })
  }
}

}
// export interface Transaction {
//   item: string;
//   cost: number;
// }
