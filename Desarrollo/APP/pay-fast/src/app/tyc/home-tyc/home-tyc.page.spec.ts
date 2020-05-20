import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeTycPage } from './home-tyc.page';

describe('HomeTycPage', () => {
  let component: HomeTycPage;
  let fixture: ComponentFixture<HomeTycPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTycPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeTycPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
