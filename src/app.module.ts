import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { EstudianteModule } from './estudiante/estudiante.module';
import { ProfesionalModule } from './profesional/profesional.module';
import { AdministradorModule } from './administrador/administrador.module';
import { ReporEstudianteModule } from './repor_estudiante/repor_estudiante.module';
// import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';
import { DiagnosticoModule } from './diagnostico/diagnostico.module';
import { CalificarProfeModule } from './calificar_profe/calificar_profe.module';
import { ReporProfeModule } from './repor_profe/repor_profe.module';
import { CategoriaModule } from './categoria/categoria.module';

@Module({
  imports: [
    EstudianteModule, 
    ProfesionalModule, 
    AdministradorModule, 
    ReporEstudianteModule, ChatModule, DiagnosticoModule, CalificarProfeModule, ReporProfeModule, CategoriaModule],
  providers: []
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
