import { TestBed } from '@angular/core/testing';

import { ArticulosServicesService } from './articulos-services.service';

describe('ArticulosServicesService', () => {
  let service: ArticulosServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ArticulosServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
