import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { EstudianteModule } from './estudiante/estudiante.module';
import { ProfesionalModule } from './profesional/profesional.module';
import { AdministradorModule } from './administrador/administrador.module';
import { ReporEstudianteModule } from './repor_estudiante/repor_estudiante.module';
// import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    EstudianteModule, 
    ProfesionalModule, 
    AdministradorModule, 
    ReporEstudianteModule]
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
