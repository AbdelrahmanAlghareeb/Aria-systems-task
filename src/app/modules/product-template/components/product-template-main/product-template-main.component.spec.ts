import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductTemplateMainComponent } from './product-template-main.component';

describe('ProductTemplateMainComponent', () => {
  let component: ProductTemplateMainComponent;
  let fixture: ComponentFixture<ProductTemplateMainComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProductTemplateMainComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductTemplateMainComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
