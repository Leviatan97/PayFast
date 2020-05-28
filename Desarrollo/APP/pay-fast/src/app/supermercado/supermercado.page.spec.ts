import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SupermercadoPage } from './supermercado.page';

describe('SupermercadoPage', () => {
  let component: SupermercadoPage;
  let fixture: ComponentFixture<SupermercadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SupermercadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SupermercadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
