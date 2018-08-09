import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod4childComponent } from './mod4child.component';

describe('Mod4childComponent', () => {
  let component: Mod4childComponent;
  let fixture: ComponentFixture<Mod4childComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mod4childComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mod4childComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
