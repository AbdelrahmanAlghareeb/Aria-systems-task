import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTemplateStep2Component } from './product-template-step2.component';

describe('ProductTemplateStep2Component', () => {
  let component: ProductTemplateStep2Component;
  let fixture: ComponentFixture<ProductTemplateStep2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTemplateStep2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTemplateStep2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
