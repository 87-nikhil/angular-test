import { TestBed, async, inject } from '@angular/core/testing';

import { AuthentitationGuard } from './authentitation.guard';

describe('AuthentitationGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthentitationGuard]
    });
  });

  it('should ...', inject([AuthentitationGuard], (guard: AuthentitationGuard) => {
    expect(guard).toBeTruthy();
  }));
});
