import { TestBed } from '@angular/core/testing';

import { FacultyCourseDetailsService } from './faculty-course-details.service';

describe('FacultyCourseDetailsService', () => {
  let service: FacultyCourseDetailsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FacultyCourseDetailsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
