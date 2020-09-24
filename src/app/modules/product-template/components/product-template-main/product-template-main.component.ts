import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-template-main',
  templateUrl: './product-template-main.component.html',
  styleUrls: ['./product-template-main.component.scss']
})
export class ProductTemplateMainComponent implements OnInit {
  steps : Step[] = [
    new Step( "Create product template", true ),
    new Step( "Quantity" ),
    new Step( "Products review" ),
  ]
  constructor(private activatedRoute:ActivatedRoute) { }
  currentStep : number
  ngOnInit(): void {
  }
  checkSteps(){
    let step:string = this.activatedRoute.snapshot
    .children[this.activatedRoute.snapshot.children.length-1]
    .routeConfig.path
    this.currentStep = Number(step.split("step")[1])
  }

}
export class Step {
  constructor(
    public name:string,
    public status:boolean = false
  ){}
}
