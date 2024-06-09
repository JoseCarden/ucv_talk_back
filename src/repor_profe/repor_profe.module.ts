import { Module } from '@nestjs/common';
import { ReporProfeService } from './repor_profe.service';
import { ReporProfeController } from './repor_profe.controller';

@Module({
  controllers: [ReporProfeController],
  providers: [ReporProfeService],
})
export class ReporProfeModule {}
