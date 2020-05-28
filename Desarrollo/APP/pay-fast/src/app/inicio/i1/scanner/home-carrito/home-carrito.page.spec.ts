import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeCarritoPage } from './home-carrito.page';

describe('HomeCarritoPage', () => {
  let component: HomeCarritoPage;
  let fixture: ComponentFixture<HomeCarritoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeCarritoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeCarritoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
