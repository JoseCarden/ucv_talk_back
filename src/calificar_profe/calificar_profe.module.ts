import { Module } from '@nestjs/common';
import { CalificarProfeService } from './calificar_profe.service';
import { CalificarProfeController } from './calificar_profe.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [CalificarProfeController],
  providers: [CalificarProfeService],
})
export class CalificarProfeModule {}
