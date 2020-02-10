
import { Controller, Get } from '@nestjs/common';

@Controller('providers')
export class ProvidersController {
  @Get()
  findAll(): string {
    return 'This action returns all providers';
  }
}
