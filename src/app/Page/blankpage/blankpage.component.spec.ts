/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BlankpageComponent } from './blankpage.component';

describe('BlankpageComponent', () => {
  let component: BlankpageComponent;
  let fixture: ComponentFixture<BlankpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BlankpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BlankpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
