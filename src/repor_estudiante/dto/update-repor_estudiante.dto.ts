import { PartialType } from '@nestjs/mapped-types';
import { CreateReporEstudianteDto } from './create-repor_estudiante.dto';

export class UpdateReporEstudianteDto extends PartialType(CreateReporEstudianteDto) {}
