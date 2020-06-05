import { TestBed } from '@angular/core/testing';

import { DataScannerService } from './data-scanner.service';

describe('DataScannerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DataScannerService = TestBed.get(DataScannerService);
    expect(service).toBeTruthy();
  });
});
