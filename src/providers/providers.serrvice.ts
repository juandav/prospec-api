import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from "mongoose";
import { MongooseCrudService } from 'nestjs-crud-mongoose';
import { ProviderEntityDto } from './dto/provider-entity.dto';

@Injectable()
export class ProvidersService extends MongooseCrudService<ProviderEntityDto> {
  constructor(@InjectModel('Providers') private readonly providersModel: Model<ProviderEntityDto>) {
    super(providersModel);
  }

  updateProfile(id, file) {
    this.providersModel.findOneAndUpdate({'_id': id}, { $set:{profilePhoto:file}}).exec();
  }
}
