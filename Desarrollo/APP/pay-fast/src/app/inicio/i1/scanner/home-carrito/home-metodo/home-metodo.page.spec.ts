import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeMetodoPage } from './home-metodo.page';

describe('HomeMetodoPage', () => {
  let component: HomeMetodoPage;
  let fixture: ComponentFixture<HomeMetodoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeMetodoPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeMetodoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
