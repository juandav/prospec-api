
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { SpecialtiesController } from './specialties.controller';
import { SpecialtiesService } from './specialties.service';
import { SpecialtiesSchema } from './specialties.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Specialties', schema: SpecialtiesSchema }])],
  controllers: [SpecialtiesController],
  providers: [SpecialtiesService],
})
export class SpecialtiesModule {}
