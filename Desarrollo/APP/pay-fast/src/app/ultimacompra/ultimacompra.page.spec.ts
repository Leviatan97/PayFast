import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { UltimacompraPage } from './ultimacompra.page';

describe('UltimacompraPage', () => {
  let component: UltimacompraPage;
  let fixture: ComponentFixture<UltimacompraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UltimacompraPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(UltimacompraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
