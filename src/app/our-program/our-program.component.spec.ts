import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OurProgramComponent } from './our-program.component';

describe('OurProgramComponent', () => {
  let component: OurProgramComponent;
  let fixture: ComponentFixture<OurProgramComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OurProgramComponent]
    });
    fixture = TestBed.createComponent(OurProgramComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
