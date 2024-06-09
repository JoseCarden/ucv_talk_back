import { Test, TestingModule } from '@nestjs/testing';
import { ReporProfeController } from './repor_profe.controller';
import { ReporProfeService } from './repor_profe.service';

describe('ReporProfeController', () => {
  let controller: ReporProfeController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReporProfeController],
      providers: [ReporProfeService],
    }).compile();

    controller = module.get<ReporProfeController>(ReporProfeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
