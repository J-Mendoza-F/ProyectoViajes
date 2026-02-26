import {Ruta} from "./Ruta";
import {EstadoViaje} from "./enums";
import {ListaPasajeros} from "./ListaPasajeros";

export class Viaje{
    public listaPasajeros:ListaPasajeros;

    constructor(
        public: id:string,
        public ruta: Ruta,
        public fechaHoraSalida: Date,
        public estado: EstadoViaje
    ){
        this.listaPasajeros=new ListaPasajeros();
    }
}