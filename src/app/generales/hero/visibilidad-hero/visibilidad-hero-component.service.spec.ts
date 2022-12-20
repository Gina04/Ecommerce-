import { TestBed } from '@angular/core/testing';

import { VisibilidadHeroComponentService } from './visibilidad-hero-component.service';

describe('VisibilidadHeroComponentService', () => {
  let service: VisibilidadHeroComponentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VisibilidadHeroComponentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
