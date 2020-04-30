import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { R1Page } from './r1.page';

describe('R1Page', () => {
  let component: R1Page;
  let fixture: ComponentFixture<R1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ R1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(R1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
