import {Reserva} from "./Reserva";

export class Boleto{
    constructor(
        public id: string,
        public reserva: Reserva,
        public fechaEmision: Date=new Date()
    ){}
}