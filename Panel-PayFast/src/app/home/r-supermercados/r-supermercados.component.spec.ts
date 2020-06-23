import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RSupermercadosComponent } from './r-supermercados.component';

describe('RSupermercadosComponent', () => {
  let component: RSupermercadosComponent;
  let fixture: ComponentFixture<RSupermercadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RSupermercadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RSupermercadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
