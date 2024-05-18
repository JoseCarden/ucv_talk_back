import { Test, TestingModule } from '@nestjs/testing';
import { ReporEstudianteController } from './repor_estudiante.controller';
import { ReporEstudianteService } from './repor_estudiante.service';

describe('ReporEstudianteController', () => {
  let controller: ReporEstudianteController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReporEstudianteController],
      providers: [ReporEstudianteService],
    }).compile();

    controller = module.get<ReporEstudianteController>(ReporEstudianteController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
