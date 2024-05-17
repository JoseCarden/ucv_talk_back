import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { EstudianteModule } from './estudiante/estudiante.module';
import { ProfesionalModule } from './profesional/profesional.module';
import { AdministradorModule } from './administrador/administrador.module';

@Module({
  imports: [EstudianteModule, ProfesionalModule, AdministradorModule]
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
