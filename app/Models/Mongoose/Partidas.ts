import { Schema, model } from "@ioc:Mongoose";

export default model('PartidaCudricula', new Schema(
    {
        partida: Number,
        fila: String,
        columna: String,
        barco: Boolean,
        atacante: Number
    })
)