import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  public cartItemlist : any=[]
  public productList = new BehaviorSubject<any>([]);
  getProducts: any;
  constructor() { }

  getproducts(){
    this.productList.asObservable();
  }
  setproduct(product:any){
    this.cartItemlist.push(...product);
    this.productList.next(product);
  }
  addtocart(product:any){
    this.cartItemlist.push(product);
    this.productList.next(this.cartItemlist);
    this.getTotalPrice();
    console.log(this.cartItemlist)

  }
  getTotalPrice(){
    let grandTotal = 0;
    this.cartItemlist.map((a:any)=>{
      grandTotal += a.total; 
    })
  }
  removaCartItem(product:any){
    this.cartItemlist.map((a:any, index: any)=>{
      if(product.id=== a.id){
        this.cartItemlist.splice(index,1);
      }
    })
  }
  removeAllCart(){
    this.cartItemlist = []
    this.productList.next(this.cartItemlist);
  }
}
