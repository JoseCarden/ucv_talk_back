import { Module } from '@nestjs/common';
// import { AppController } from './app.controller';
// import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { DocenteModule } from './docente/docente.module';

@Module({
  imports: [AuthModule, DocenteModule]
  // controllers: [AppController],
  // providers: [AppService],
})
export class AppModule {}
