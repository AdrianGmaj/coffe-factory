/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { OpinionsEditComponent } from './opinions-edit.component';

describe('OpinionsEditComponent', () => {
  let component: OpinionsEditComponent;
  let fixture: ComponentFixture<OpinionsEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpinionsEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpinionsEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
