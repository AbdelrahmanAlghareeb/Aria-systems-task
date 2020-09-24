import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductTemplateMainComponent, ProductTemplateStep1Component , ProductTemplateStep2Component } from './components'
const routes: Routes = [
  {
    path:"",
    component: ProductTemplateMainComponent,
    children : [
      {
        path : '',
        pathMatch:"full",
        redirectTo:"step1"      },
      {
        path : 'step1',
        component:ProductTemplateStep1Component
      },
      {
        path : 'step2',
        component:ProductTemplateStep2Component
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductTemplateRoutingModule { }
