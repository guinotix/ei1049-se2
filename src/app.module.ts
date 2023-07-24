import { Module } from '@nestjs/common';
import { MongooseModule } from "@nestjs/mongoose";
import { ConfigModule } from "@nestjs/config";

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CardsModule } from './cards/cards.module';

@Module({
  imports: [
    ConfigModule.forRoot(),
    CardsModule,
    // Definir la URI desde MongoDB e introducirla. Esconder nombres y pass con
    // variables de entorno
    MongooseModule.forRoot(`mongodb+srv://${process.env.USER}:${process.env.PASS}@cluster0.3aanw.mongodb.net/${process.env.NAMEDB}?retryWrites=true&w=majority`)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
