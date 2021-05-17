import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NoFacultyDetailsComponent } from './no-faculty-details.component';

describe('NoFacultyDetailsComponent', () => {
  let component: NoFacultyDetailsComponent;
  let fixture: ComponentFixture<NoFacultyDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NoFacultyDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NoFacultyDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
