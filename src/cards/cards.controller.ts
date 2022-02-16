import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
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

  @Get()
  getCards() {
    return this.cardsService.getCards();
  }

  @Get(':name')
  getCard(@Param('name') cardName: string) {
    return this.cardsService.getCard(cardName);
  }

  @Patch(':name')
  updateCopies(
    @Param('name') cardName: string,
    @Body('copies') newCopies: number
  ) {
    this.cardsService.updateCopies(cardName, newCopies);
  }

  @Delete(':name')
  removeCard(@Param('name') cardName: string) {
    this.cardsService.removeCard(cardName);
  }
}

// Controlador del recurso Cartas. La anotación @Controller indica que el mismo
// actuará en el path "mi-dominio.com/cards". Se inyecta el servicio a través
// del constructor (como la dependencia en Angular) y se definen las operaciones
// a realizar (generalmente las operaciones HTTP) para manejar las cartas.