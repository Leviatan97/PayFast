import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeOfertasPage } from './home-ofertas.page';

describe('HomeOfertasPage', () => {
  let component: HomeOfertasPage;
  let fixture: ComponentFixture<HomeOfertasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeOfertasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeOfertasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
