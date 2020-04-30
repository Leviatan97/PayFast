import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { FormLogPage } from './form-log.page';

describe('FormLogPage', () => {
  let component: FormLogPage;
  let fixture: ComponentFixture<FormLogPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormLogPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(FormLogPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
