import mongoose from "mongoose";

// El esquema es un objeto tipo JavaScript
export const CardSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    copies: { type: Number, required: true }
  }

)

export interface Card extends mongoose.Document {
    name: string,
    copies: number
}

// Clase que representa un objeto que vamos a manejar.
// En este caso es una carta con nombre y sus copias.