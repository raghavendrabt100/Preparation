import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap, Router } from '@angular/router';
import { ProductsService } from 'src/app/services/products.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  product:any;
  
  constructor(private router:ActivatedRoute,
              private service:ProductsService){}

  ngOnInit(): void {
 
    let id =this.router.snapshot.params['id'];
    this.service.getProduct(id).subscribe(data => {
      console.log(data);
      this.product=data;
      
    })
  
  }

   
}


