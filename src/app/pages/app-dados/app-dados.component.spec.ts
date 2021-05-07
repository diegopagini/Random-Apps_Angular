import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDadosComponent } from './app-dados.component';

describe('AppDadosComponent', () => {
  let component: AppDadosComponent;
  let fixture: ComponentFixture<AppDadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppDadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
