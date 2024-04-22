import { Controller, Get } from '@nestjs/common';

@Controller('estudiante')
export class EstudianteController {

    @Get()
    getAllEstudiantes(): string[]{
        return ['jose','danilo','marcano'];
    }

}
