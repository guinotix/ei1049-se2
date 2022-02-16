import { Body, Controller, Post } from "@nestjs/common";
import { CardsService } from "./cards.service";

@Controller('cards')
export class CardsController {

  constructor(private cardsService: CardsService) {}

  @Post()
  addCard(@Body('name') cardName: string,
          @Body('copies') cardCopies: number
  ): {name: string, copies: number} {
    return this.cardsService.insertCard(cardName, cardCopies);
  }
}

// Controlador del recurso Cartas. La anotación @Controller indica que el mismo
// actuará en el path "mi-dominio.com/cards". Se inyecta el servicio a través
// del constructor (como la dependencia en Angular) y se definen las operaciones
// a realizar (generalmente las operaciones HTTP) para manejar las cartas.