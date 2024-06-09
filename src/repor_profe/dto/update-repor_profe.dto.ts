import { PartialType } from '@nestjs/mapped-types';
import { CreateReporProfeDto } from './create-repor_profe.dto';

export class UpdateReporProfeDto extends PartialType(CreateReporProfeDto) {}
