import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { EstudianteModule } from './estudiante/estudiante.module';

@Module({
  imports: [AuthModule, EstudianteModule]
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
