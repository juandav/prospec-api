
import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ProvidersController } from './providers.controller';
import { ProvidersService } from './providers.serrvice';
import { ProvidersSchema } from './providers.schema';

@Module({
  imports: [
    MongooseModule.forFeatureAsync([
      {
        name: 'Providers',
        useFactory: () => {
          const schema = ProvidersSchema;
          schema.pre('save', () => console.log('Hello from pre save'));
          return schema;
        },
      },
    ]),
  ],
  controllers: [ProvidersController],
  providers: [ProvidersService],
})
export class ProvidersModule {}
