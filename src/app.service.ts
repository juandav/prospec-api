import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getProjectVersion(): string {
    return `${process.env.npm_package_name} v${process.env.npm_package_version}`;
  }
}
