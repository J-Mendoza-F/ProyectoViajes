import {Pasajero} from "./Pasajero";

export class ListaPasajeros{
    private pasajeros: Pasajero[]=[];

    agregar(pasajero: Pasajero): void{
        if(this.pasajeros.some(p=>p.dni === pasajero.dni)) return;
        this.pasajeros.push(pasajero);
    }

    obtenerTodos(): Pasajero[]{
        return this.pasajeros;
    }
}