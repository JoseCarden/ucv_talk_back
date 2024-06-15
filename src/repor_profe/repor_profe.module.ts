import { Module } from '@nestjs/common';
import { ReporProfeService } from './repor_profe.service';
import { ReporProfeController } from './repor_profe.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  controllers: [ReporProfeController],
  providers: [ReporProfeService],
})
export class ReporProfeModule {}
