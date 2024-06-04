import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { EstudianteModule } from './estudiante/estudiante.module';
import { ProfesionalModule } from './profesional/profesional.module';
import { AdministradorModule } from './administrador/administrador.module';
import { ReporEstudianteModule } from './repor_estudiante/repor_estudiante.module';
// import { AuthModule } from './auth/auth.module';
import { ChatModule } from './chat/chat.module';

@Module({
  imports: [
    EstudianteModule, 
    ProfesionalModule, 
    AdministradorModule, 
    ReporEstudianteModule, ChatModule]
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
