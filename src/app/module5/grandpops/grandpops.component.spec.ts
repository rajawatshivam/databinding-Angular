import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandpopsComponent } from './grandpops.component';

describe('GrandpopsComponent', () => {
  let component: GrandpopsComponent;
  let fixture: ComponentFixture<GrandpopsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GrandpopsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandpopsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
