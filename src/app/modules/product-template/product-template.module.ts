import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductTemplateRoutingModule } from './product-template-routing.module';

import { components } from './components';
import { ProductTemplateStep2Component } from './components/product-template-step2/product-template-step2.component'


@NgModule({
  declarations: [
    ...components,
    ProductTemplateStep2Component
  ],
  imports: [
    CommonModule,
    ProductTemplateRoutingModule
  ]
})
export class ProductTemplateModule { }
