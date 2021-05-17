import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonFacultyComponent } from './common-faculty.component';

describe('CommonFacultyComponent', () => {
  let component: CommonFacultyComponent;
  let fixture: ComponentFixture<CommonFacultyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CommonFacultyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonFacultyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
