import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [MongooseModule.forRoot('mongodb://juandav:juandav1@ds155634.mlab.com:55634/evercheck-test-9')],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
