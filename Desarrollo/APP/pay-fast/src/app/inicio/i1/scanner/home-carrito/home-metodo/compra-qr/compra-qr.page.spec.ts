import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CompraQrPage } from './compra-qr.page';

describe('CompraQrPage', () => {
  let component: CompraQrPage;
  let fixture: ComponentFixture<CompraQrPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompraQrPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CompraQrPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
