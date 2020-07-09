import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InicioSPage } from './inicio-s.page';

describe('InicioSPage', () => {
  let component: InicioSPage;
  let fixture: ComponentFixture<InicioSPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioSPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InicioSPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
