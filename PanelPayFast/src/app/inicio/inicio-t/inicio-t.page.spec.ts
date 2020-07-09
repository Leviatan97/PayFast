import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { InicioTPage } from './inicio-t.page';

describe('InicioTPage', () => {
  let component: InicioTPage;
  let fixture: ComponentFixture<InicioTPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InicioTPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(InicioTPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
