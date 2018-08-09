import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Mod4parentComponent } from './mod4parent.component';

describe('Mod4parentComponent', () => {
  let component: Mod4parentComponent;
  let fixture: ComponentFixture<Mod4parentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Mod4parentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Mod4parentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
