
import { Controller, Get } from '@nestjs/common';

@Controller('specialties')
export class SpecialtiesController {
  @Get()
  findAll(): string {
    return 'This action returns all specialties';
  }
}
