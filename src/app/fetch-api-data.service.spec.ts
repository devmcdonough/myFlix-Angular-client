import { TestBed } from '@angular/core/testing';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs';
import { FetchApiDataService } from './fetch-api-data.service';


describe('FetchApiDataService', () => {
  let service: FetchApiDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FetchApiDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
