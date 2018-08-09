import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PopsComponent } from './pops.component';

describe('PopsComponent', () => {
  let component: PopsComponent;
  let fixture: ComponentFixture<PopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
