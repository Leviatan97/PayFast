import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { RtiendaPage } from './rtienda.page';

describe('RtiendaPage', () => {
  let component: RtiendaPage;
  let fixture: ComponentFixture<RtiendaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RtiendaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(RtiendaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
