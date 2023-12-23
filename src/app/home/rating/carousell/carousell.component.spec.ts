/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { CarousellComponent } from './carousell.component';

describe('CarousellComponent', () => {
  let component: CarousellComponent;
  let fixture: ComponentFixture<CarousellComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarousellComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarousellComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
