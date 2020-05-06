import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeTutPage } from './home-tut.page';

describe('HomeTutPage', () => {
  let component: HomeTutPage;
  let fixture: ComponentFixture<HomeTutPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeTutPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeTutPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
