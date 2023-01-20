import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HeaderModesComponent } from './header-modes.component';

describe('HeaderModesComponent', () => {
  let component: HeaderModesComponent;
  let fixture: ComponentFixture<HeaderModesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HeaderModesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HeaderModesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
