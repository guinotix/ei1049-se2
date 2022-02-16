import { Injectable, NotFoundException } from "@nestjs/common";
import { Card } from './card.model';

@Injectable()
export class CardsService {

  private cards: Card[] = [];

  insertCard(name: string, copies: number) {
    const newCard = new Card(name, copies);
    this.cards.push(newCard);
    return {name: name, copies: copies};
  }

  getCards() {
    return this.cards.slice();
  }

  getCard(name: string): Card {
    return this.findCard(name)[0];
  }

  updateCopies(name: string, copies: number) {
    const [card, index] = this.findCard(name);
    const cartaActualizada = {...card}; // Copia de la carta a actualizar
    if (copies >= 0) {
      cartaActualizada.copies = copies;
    }
    this.cards[index] = cartaActualizada;
  }

  removeCard(name: string) {
    const [_, index] = this.findCard(name); // Solo queremos el index
    this.cards.splice(index, 1);
  }

  private findCard(name: string): [Card, number] {
    const index = this.cards.findIndex(
      (cardToSearch) => cardToSearch.name === name
    );
    const card = this.cards[index];
    if (!card) {
      throw new NotFoundException();
    }
    return [card, index];
  }
}



// Clase de servicio de Cartas. Éstas se almacenan en un Array de su tipo.
// Esta clase tiene los elementos básicos para gestionar la estructura de datos
// de las cartas.