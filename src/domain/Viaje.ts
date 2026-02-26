import {Bus} from "./Bus";
import {Ruta} from "./Ruta";
import {Asiento} from "./Asiento";
import {EstadoViaje} from "./enums/EstadoViaje";

export class Viaje{
    constructor(
        public id:string,
        public ruta: Ruta,
        public bus: Bus,
        public fecha: Date,
        public estado: EstadoViaje
    ){}

    asientosDisponibles(): Asiento[]{
        return this.bus.asientos.filter(a=>!a.ocupado);
    }
}