import {Pasajero} from "./Pasajero";
import {Viaje} from "./Viaje";
import {Asiento} from "./Asiento";
import {EstadoReserva} from "./enums";

export class Reserva{
    constructor(
        public id: string,
        public pasajero: Pasajero,
        public viaje: Viaje,
        public asiento: Asiento,
        public estado: EstadoReserva,
        public fecha: Date=new Date()
    ){}
}