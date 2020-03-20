import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HomeDeciduousPage } from './home-deciduous.page';

describe('HomeDeciduousPage', () => {
  let component: HomeDeciduousPage;
  let fixture: ComponentFixture<HomeDeciduousPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeDeciduousPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(HomeDeciduousPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
