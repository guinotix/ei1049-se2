import { Module } from "@nestjs/common";
import { CardsController } from "./cards.controller";
import { CardsService } from "./cards.service";

@Module({
  controllers: [CardsController],
  providers: [CardsService]
})
export class CardsModule {}

// Módulo del recurso de las cartas. Sirve para cohesionar el controlador y el
// servicio y hacer que sea visible desde el "entry point" de la aplicación.