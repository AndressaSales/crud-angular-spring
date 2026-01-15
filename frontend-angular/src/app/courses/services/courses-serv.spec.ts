import { TestBed } from '@angular/core/testing';

import { CoursesServ } from './courses-serv';

describe('CoursesServ', () => {
  let service: CoursesServ;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoursesServ);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
