import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RTiendaComponent } from './r-tienda.component';

describe('RTiendaComponent', () => {
  let component: RTiendaComponent;
  let fixture: ComponentFixture<RTiendaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RTiendaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RTiendaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
