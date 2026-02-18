import {Asiento} from "./Asiento";

export class Bus{
    constructor(
        public id:string,
        public placa:string,
        public asientos:Asiento[]
    ){}
    obtenerAsiento(numero:number){
        return this.asientos.find(a=>a.numero===numero);
    }
}