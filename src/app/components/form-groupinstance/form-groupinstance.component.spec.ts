import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormGroupinstanceComponent } from './form-groupinstance.component';

describe('FormGroupinstanceComponent', () => {
  let component: FormGroupinstanceComponent;
  let fixture: ComponentFixture<FormGroupinstanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormGroupinstanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormGroupinstanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
