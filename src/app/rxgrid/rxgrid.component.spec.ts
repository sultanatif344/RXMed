/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RxgridComponent } from './rxgrid.component';

describe('RxgridComponent', () => {
  let component: RxgridComponent;
  let fixture: ComponentFixture<RxgridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RxgridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RxgridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
