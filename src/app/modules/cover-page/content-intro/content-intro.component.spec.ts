import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContentIntroComponent } from './content-intro.component';

describe('ContentIntroComponent', () => {
  let component: ContentIntroComponent;
  let fixture: ComponentFixture<ContentIntroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContentIntroComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContentIntroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
