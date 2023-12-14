import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iproducts } from '../components/forms/models/Iproducts';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

   apiUrl='http://localhost:3000/products';


  constructor(private http:HttpClient) { }

 public getAllProducts():Observable<Iproducts[]>{
    return this.http.get<Iproducts[]>(this.apiUrl);
  }

  public getProduct(id:number):Observable<Iproducts>{
    return this.http.get<Iproducts>('http://localhost:3000/products/1');
  }

}  



