import {Pasajero} from "./Pasajero";
import {Viaje} from "./Viaje";
import {Asiento} from "./Asiento";
import {EstadoReserva} from "./enums/EstadoReserva";
import {TipoTarifa} from "./enums/TipoTarifa";

export class Reserva{
    constructor(
        public id: string,
        public pasajero: Pasajero,
        public viaje: Viaje,
        public asiento: Asiento,
        public tarifa: TipoTarifa,
        public estado: EstadoReserva
    ){}

    cancelar(): void{
        this.estado=EstadoReserva.CANCELADA;
        this.asiento.ocupado=false;
    }
}