import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeAluPage } from './home-alu.page';

describe('HomeAluPage', () => {
  let component: HomeAluPage;
  let fixture: ComponentFixture<HomeAluPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAluPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeAluPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
