import { TestBed, async, inject } from '@angular/core/testing';

import { SupermercadoGuard } from './supermercado.guard';

describe('SupermercadoGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SupermercadoGuard]
    });
  });

  it('should ...', inject([SupermercadoGuard], (guard: SupermercadoGuard) => {
    expect(guard).toBeTruthy();
  }));
});
