import { Test, TestingModule } from '@nestjs/testing';
import { ReporEstudianteService } from './repor_estudiante.service';

describe('ReporEstudianteService', () => {
  let service: ReporEstudianteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReporEstudianteService],
    }).compile();

    service = module.get<ReporEstudianteService>(ReporEstudianteService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
