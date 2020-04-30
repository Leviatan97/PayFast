import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { I1Page } from './i1.page';

describe('I1Page', () => {
  let component: I1Page;
  let fixture: ComponentFixture<I1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ I1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(I1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
