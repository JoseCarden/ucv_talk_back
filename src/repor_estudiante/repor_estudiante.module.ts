import { Module } from '@nestjs/common';
import { ReporEstudianteService } from './repor_estudiante.service';
import { ReporEstudianteController } from './repor_estudiante.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ReporEstudianteController],
  providers: [ReporEstudianteService],
})
export class ReporEstudianteModule {}
