import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LoginRPage } from './login-r.page';

describe('LoginRPage', () => {
  let component: LoginRPage;
  let fixture: ComponentFixture<LoginRPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoginRPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LoginRPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
