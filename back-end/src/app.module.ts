import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { MessagesModule } from './messages/messages.module';
@Module({
  imports: [
    MessagesModule,
    MongooseModule.forRoot('mongodb://127.0.0.1:27017/babulkeyer', {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    }),
  ],
  controllers: [],
})
export class AppModule {}
