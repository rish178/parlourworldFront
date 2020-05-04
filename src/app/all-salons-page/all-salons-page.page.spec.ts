import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AllSalonsPagePage } from './all-salons-page.page';

describe('AllSalonsPagePage', () => {
  let component: AllSalonsPagePage;
  let fixture: ComponentFixture<AllSalonsPagePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AllSalonsPagePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AllSalonsPagePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
