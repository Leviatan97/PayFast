import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerfilatmodalPage } from './perfilatmodal.page';

describe('PerfilatmodalPage', () => {
  let component: PerfilatmodalPage;
  let fixture: ComponentFixture<PerfilatmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilatmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilatmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
