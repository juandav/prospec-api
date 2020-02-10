import { Injectable } from '@nestjs/common';

@Injectable()
export class ProvidersService {
  private readonly data: any[] = [];

  create(data: any) {
    this.data.push(data);
  }

  findAll(): any[] {
    return this.data;
  }
}
