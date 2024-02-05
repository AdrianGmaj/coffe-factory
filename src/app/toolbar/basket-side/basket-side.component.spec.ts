/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BasketSideComponent } from './basket-side.component';

describe('BasketSideComponent', () => {
  let component: BasketSideComponent;
  let fixture: ComponentFixture<BasketSideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BasketSideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BasketSideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
