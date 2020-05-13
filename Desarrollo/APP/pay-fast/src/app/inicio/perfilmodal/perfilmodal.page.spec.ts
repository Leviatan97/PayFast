import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { PerfilmodalPage } from './perfilmodal.page';

describe('PerfilmodalPage', () => {
  let component: PerfilmodalPage;
  let fixture: ComponentFixture<PerfilmodalPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PerfilmodalPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(PerfilmodalPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
