import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './layout/header/header.component';
import { SearchComponent } from './layout/header/search/search.component';



@NgModule({
  declarations: [HeaderComponent, SearchComponent],
  imports: [
    CommonModule
  ],
  exports:[
    HeaderComponent, SearchComponent
  ]
})
export class SharedModule { }
