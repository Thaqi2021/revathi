import { Variable } from "@angular/compiler/src/render3/r3_ast";

export class Product {

  product_id!:Number;
  hsncode !:String;
  brand !:String;
  productName !:String;
  myImageObj !:String;
  qty !:Variable;
  price !:Number;
  pdesc !:String;
  bas=0;
}
