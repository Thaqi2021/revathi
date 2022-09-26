import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../user';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  constructor( private router: Router  ) { }

  ngOnInit(): void {
  }
  cartcheck(){
    if(User.idd==undefined){
      this.router.navigate(['/login']);

    }
  }
}
