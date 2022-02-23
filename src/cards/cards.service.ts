import { Injectable, NotFoundException } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Model } from "mongoose";

import { Card } from './card.model';

@Injectable()
export class CardsService {

  // private cards: Card[] = [];

  constructor(@InjectModel('Card') private readonly cardModel: Model<Card>) {
  }

  async insertCard(name: string, copies: number) {
    // const newCard = new Card(name, copies);
    const newCard = new this.cardModel({
      name: name,
      copies: copies
    });
    // this.cards.push(newCard);
    const result = await newCard.save();
    console.log(result);

    return result.name as string;
  }

  async getCards() {
    const cards = await this.cardModel.find().exec();
    return cards.map((card) => ({
      name: card.name,
      copies: card.copies
    }));
    // return this.cards.slice();
  }

  async getCard(name: string) {
    const card = await this.findCard(name);
    return card;
  }

  async updateCopies(name: string, copies: number) {
    const card = await this.findCard(name);
    if (copies >= 0) {
      card.copies = copies;
    }
    card.save();
  }

  // Modificar para que muestre por consola que se borra el elemento.
  async removeCard(name: string) {
    const result = await this.cardModel.deleteOne({name: name}).exec();
    if (result.deletedCount === 0) {
      throw new NotFoundException();
    }
    console.log(result);
  }

  private async findCard(name: string): Promise<Card> {
    let card;
    try {
      card = await this.cardModel.findById(name).exec();
    } catch (e) {
      throw new NotFoundException();
    }
    if (!card) {
      throw new NotFoundException();
    }
    return card;
  }
}



// Clase de servicio de Cartas. Éstas se almacenan en un Array de su tipo.
// Esta clase tiene los elementos básicos para gestionar la estructura de datos
// de las cartas.