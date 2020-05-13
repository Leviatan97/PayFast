import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerfiltmodalPage } from './perfiltmodal.page';

describe('PerfiltmodalPage', () => {
  let component: PerfiltmodalPage;
  let fixture: ComponentFixture<PerfiltmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfiltmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfiltmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
