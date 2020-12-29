import { TestBed } from '@angular/core/testing';

import { HttpClient } from '@angular/common/http' 
import { DataUsersService } from './data-users.service';

describe('DataUsersService', () => {
  let service: DataUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
