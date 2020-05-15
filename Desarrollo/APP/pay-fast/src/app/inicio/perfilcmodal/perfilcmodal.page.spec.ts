import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerfilcmodalPage } from './perfilcmodal.page';

describe('PerfilcmodalPage', () => {
  let component: PerfilcmodalPage;
  let fixture: ComponentFixture<PerfilcmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilcmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilcmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
