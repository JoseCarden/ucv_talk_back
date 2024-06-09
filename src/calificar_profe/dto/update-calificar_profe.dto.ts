import { PartialType } from '@nestjs/mapped-types';
import { CreateCalificarProfeDto } from './create-calificar_profe.dto';

export class UpdateCalificarProfeDto extends PartialType(CreateCalificarProfeDto) {}
