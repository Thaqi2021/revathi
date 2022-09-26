import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-learn',
  templateUrl: './learn.component.html',
  styleUrls: ['./learn.component.css']
})
export class LearnComponent implements OnInit {
  courseName = "Angular";
  isAuthenticated!:boolean;
  submitted=false;
  userName!:String;
  name!:String;
  show!:boolean;
  sortoption: string = '';
  a:any=[1,2,3,4,5];
  b:any=[2,4];

  productsList: any = [
    { productName: 'Samsung J7', price: 18000,bas:0 },
    { productName: 'Apple iPhone 6S', price: 60000,bas:0 },
    { productName: 'Lenovo K5 Note', price: 10000 ,bas:0},
    { productName: 'Nokia 6', price: 15000,bas:0 },
    { productName: 'Vivo V5 Plus', price: 26000,bas:0 },
  ];
  CartsList: any = [
    { productName: 'Samsung J7', price: 18000 },
    { productName: 'Apple iPhone 6S', price: 60000 },
    { productName: 'Vivo V5 Plus', price: 26000 },
  ];
  courses: any[] = [
    { id: 1, name: "TypeScript" },
    { id: 2, name: "Angular" },
    { id: 3, name: "Node JS" },
    { id: 1, name: "TypeScript" }
  ];
  choice = 0;
  nextChoice() {
    this.choice++;
    if(this.choice==4){
      this.choice = 0;
    }
  }
  co:com[]=[];
  po:com[]=[];
  constructor() {

   }

  ngOnInit(): void {
    var k=0,p=0;
    console.log(this.CartsList.length);
    for(var i=0;i<this.CartsList.length;i++){
      for(var j=0;j<this.productsList.length;j++){
        // console.log(this.CartsList[i].productName==this.productsList[j].productName);
        if(this.CartsList[i].productName==this.productsList[j].productName){
          console.log(this.productsList[i].productName)
          this.productsList[j].bas=1;
          // this.co.push(this.productsList[i]);
          k++;
        }
      }
    }
    console.log(this.productsList);
    // console.log(this.po);

  }
  changeName(){
    this.courseName="TypeScript";
  }
  onSubmit(name:String, password:String){
    this.submitted=true;
    if(name=="admin"&&password=="admin"){
      this.isAuthenticated=true;
      this.userName=name;
    }else{
      this.isAuthenticated = false;

    }
  }
}
export class com{

  productName!:String;
   price!: Number
}
