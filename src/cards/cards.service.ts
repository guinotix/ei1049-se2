import { Injectable } from '@nestjs/common';
import { Card } from './card.model';

@Injectable()
export class CardsService {

  cards: Card[] = [];

  insertCard(name: string, copies: number) {
    const newCard = new Card(name, copies);
    this.cards.push(newCard);
    return {name: name, copies: copies};
  }
}

// Clase de servicio de Cartas. Éstas se almacenan en un Array de su tipo.
// Esta clase tiene los elementos básicos para gestionar la estructura de datos
// de las cartas.