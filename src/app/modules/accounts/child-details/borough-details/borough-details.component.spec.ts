import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoroughDetailsComponent } from './borough-details.component';

describe('BoroughtDetailsComponent', () => {
  let component: BoroughDetailsComponent;
  let fixture: ComponentFixture<BoroughDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoroughDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoroughDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
