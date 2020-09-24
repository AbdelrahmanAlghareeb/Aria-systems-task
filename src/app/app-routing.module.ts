import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path:"product-template",
    loadChildren : ()=> import('./modules/product-template/product-template.module').then(m=>m.ProductTemplateModule),
  },
  {
    path:"*",
    redirectTo : "product-template"
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
