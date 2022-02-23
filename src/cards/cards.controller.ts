import { Body, Controller, Delete, Get, Param, Patch, Post } from "@nestjs/common";
import { CardsService } from "./cards.service";
import { Card } from "./card.model";

@Controller('cards')
export class CardsController {

  constructor(private cardsService: CardsService) {}

  @Post()
  async addCard(@Body('name') cardName: string,
          @Body('copies') cardCopies: number
  ) {
    const generatedCard = await this.cardsService.insertCard(cardName, cardCopies);
    return { name: generatedCard };
  }

  @Get()
  async getCards() {
    const cards = await this.cardsService.getCards();
    return cards;
  }

  @Get(':name')
  getCard(@Param('name') cardName: string) {
    return this.cardsService.getCard(cardName);
  }

  @Patch(':name')
  async updateCopies(
    @Param('name') cardName: string,
    @Body('copies') newCopies: number
  ) {
    await this.cardsService.updateCopies(cardName, newCopies);
  }

  @Delete(':name')
  async removeCard(@Param('name') cardName: string) {
    await this.cardsService.removeCard(cardName);
  }
}

// Controlador del recurso Cartas. La anotación @Controller indica que el mismo
// actuará en el path "mi-dominio.com/cards". Se inyecta el servicio a través
// del constructor (como la dependencia en Angular) y se definen las operaciones
// a realizar (generalmente las operaciones HTTP) para manejar las cartas.