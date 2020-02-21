import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MongooseCrudService } from 'nestjs-crud-mongoose';
import { SpecialtiesEntityDto } from './dto/specialties-entity.dto'

@Injectable()
export class SpecialtiesService extends MongooseCrudService<SpecialtiesEntityDto> {
  constructor(@InjectModel('Specialties') private readonly specialtiesModel: Model<SpecialtiesEntityDto>) {
    super(specialtiesModel)
  }
}
