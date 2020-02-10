import { Injectable } from '@nestjs/common';
import { Data } from './interfaces/data.interface';

@Injectable()
export class SpecialtiesService {
  private readonly data: Data[] = [];

  create(data: Data) {
    this.data.push(data);
  }

  findAll(): Data[] {
    return this.data;
  }
}
