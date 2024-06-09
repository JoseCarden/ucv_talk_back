import { Test, TestingModule } from '@nestjs/testing';
import { ReporProfeService } from './repor_profe.service';

describe('ReporProfeService', () => {
  let service: ReporProfeService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReporProfeService],
    }).compile();

    service = module.get<ReporProfeService>(ReporProfeService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
