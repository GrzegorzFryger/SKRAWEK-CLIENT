import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GuardiansChildComponent } from './guardians-child.component';

describe('GuardiansChildComponent', () => {
  let component: GuardiansChildComponent;
  let fixture: ComponentFixture<GuardiansChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GuardiansChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GuardiansChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
