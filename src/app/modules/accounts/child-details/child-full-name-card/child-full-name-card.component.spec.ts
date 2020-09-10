import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildFullNameCardComponent } from './child-full-name-card.component';

describe('ChildFullNameCardComponent', () => {
  let component: ChildFullNameCardComponent;
  let fixture: ComponentFixture<ChildFullNameCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChildFullNameCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChildFullNameCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
