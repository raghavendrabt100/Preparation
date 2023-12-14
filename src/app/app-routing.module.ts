import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutsDetailsComponent } from './components/produts-details/produts-details.component';
import { ProductComponent } from './components/product/product.component';

const routes: Routes = [
  {path:'products',component:ProdutsDetailsComponent},
  {path:'product/:id',component:ProductComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
