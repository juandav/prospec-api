import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProvidersModule } from './providers/providers.module';
import { SpecialtiesModule } from './specialties/specialties.module';
import { DB_URI } from './app.constants';

@Module({
  imports: [
    SpecialtiesModule,
    ProvidersModule,
    MongooseModule.forRoot(DB_URI)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
