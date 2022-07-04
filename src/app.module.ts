import { Module } from '@nestjs/common';
import { ContentsModule } from './contents/contents.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [ContentsModule, MongooseModule.forRoot('mongodb+srv://goastro:15ioasys86@cluster0.wtub9xi.mongodb.net/?retryWrites=true&w=majority')],
  controllers: [],
  providers: [],
})
export class AppModule {}
