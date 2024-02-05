/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EnjoyComponent } from './enjoy.component';

describe('EnjoyComponent', () => {
  let component: EnjoyComponent;
  let fixture: ComponentFixture<EnjoyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EnjoyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EnjoyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
