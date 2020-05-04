import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListYourBusinessPage } from './list-your-business.page';

describe('ListYourBusinessPage', () => {
  let component: ListYourBusinessPage;
  let fixture: ComponentFixture<ListYourBusinessPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListYourBusinessPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListYourBusinessPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
