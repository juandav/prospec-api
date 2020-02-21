import { Controller } from '@nestjs/common';
import { Crud } from '@nestjsx/crud';
import { SpecialtiesEntityDto } from './dto/specialties-entity.dto';
import { SpecialtiesService } from './specialties.service';

@Crud({
  model: {
    type: SpecialtiesEntityDto
  }
})
@Controller('specialties')
export class SpecialtiesController {
  constructor(public service: SpecialtiesService) { }
}
