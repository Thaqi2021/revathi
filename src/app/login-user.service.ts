import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { User } from '../app/user';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Product } from './product';
import { Cart } from './cart';
@Injectable({
  providedIn: 'root'
})
export class LoginUserService {
  private baseUrl="http://localhost:8080/";
  user = new User();

  constructor(private httpClient :HttpClient,private router: Router ) { }

  loginUser(emailid:String ,pswd:String){
    // console.log(emailid+"im working fine "+pswd);
    // this.user.id="3";
    // this.user.name="thaqi";
    this.user.email=emailid;
    this.user.password=pswd;
    // this.user.address="sundaram lane";
    console.log(this.baseUrl);
    console.log(this.user);
    return this.httpClient.post<User>(this.baseUrl+'login',this.user);
  }
  public findAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.baseUrl+'users');
  }
  public saveNewUser(user:User){
    console.log(user);
    return this.httpClient.post<User>(this.baseUrl+'signUp',user);
  }
  public getProduct():Observable<Product[]>{
    return this.httpClient.get<Product[]>(this.baseUrl+'products');
  }
  public addProduct(id:String,pro_id:String){
    return this.httpClient.get(this.baseUrl+'buy-'+pro_id+'-'+id+'-product');
  }
  public getCart(id:String):Observable<Cart[]>{
    console.log(User.idd+"......")
    return this.httpClient.get<Cart[]>(this.baseUrl+'wishlist-'+id);
  }
}
