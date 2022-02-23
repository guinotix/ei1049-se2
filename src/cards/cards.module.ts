import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { CardsController } from "./cards.controller";
import { CardsService } from "./cards.service";
import { CardSchema } from "./card.model";

@Module({
  // Inyecta este modelo donde queramos en la aplicación
  imports: [
    MongooseModule.forFeature([
      {name: 'Card', schema: CardSchema}
    ])
  ],
  controllers: [CardsController],
  providers: [CardsService]
})
export class CardsModule {}

// Módulo del recurso de las cartas. Sirve para cohesionar el controlador y el
// servicio y hacer que sea visible desde el "entry point" de la aplicación.