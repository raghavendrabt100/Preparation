import { Component, OnInit } from '@angular/core';
import { ProductsService } from 'src/app/services/products.service';
import { Iproducts } from '../forms/models/Iproducts';

@Component({
  selector: 'app-produts-details',
  templateUrl: './produts-details.component.html',
  styleUrls: ['./produts-details.component.css']
})
export class ProdutsDetailsComponent implements OnInit{
  
  age:Date = new Date ('5/9/1989');
  dob:Date= new Date();
  
  time:string = new Date().toTimeString();

   products:Iproducts[] =[];
  constructor(private service:ProductsService,){
    // this.updateTime();
  }

  ngOnInit():void{
   
  }
  getProducts(){
    return this.service.getAllProducts().
    subscribe((products)=>{this.products=products},
    (err:string)=>{'Na data check prpoely' },()=>{})
     }

    // let T=10;
// // // setTimeout(()=>{
// // // console.log(T);
// // // },5000)

     updateTime(){
      setInterval(()=>{
        return this.time=new Date().toLocaleTimeString()
      },1000)
     }
     
}


