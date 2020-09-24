import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTemplateStep1Component } from './product-template-step1.component';

describe('ProductTemplateStep1Component', () => {
  let component: ProductTemplateStep1Component;
  let fixture: ComponentFixture<ProductTemplateStep1Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTemplateStep1Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTemplateStep1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
