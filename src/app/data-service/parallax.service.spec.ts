import { TestBed, inject } from '@angular/core/testing';

import { ParallaxService } from './parallax.service';

describe('ParallaxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ParallaxService]
    });
  });

  it('should be created', inject([ParallaxService], (service: ParallaxService) => {
    expect(service).toBeTruthy();
  }));
});
