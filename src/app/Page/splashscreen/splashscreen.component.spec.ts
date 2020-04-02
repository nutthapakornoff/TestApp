/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SplashscreenComponent } from './splashscreen.component';

describe('SplashscreenComponent', () => {
  let component: SplashscreenComponent;
  let fixture: ComponentFixture<SplashscreenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SplashscreenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SplashscreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
