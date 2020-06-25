import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RsupermercadoPage } from './rsupermercado.page';

describe('RsupermercadoPage', () => {
  let component: RsupermercadoPage;
  let fixture: ComponentFixture<RsupermercadoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RsupermercadoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RsupermercadoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
