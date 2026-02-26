import {Asiento} from "./Asiento";

export class Bus{
    constructor(
        public id:string,
        public placa:string,
        public asientos:Asiento[]
    ){}

    obtemerAsiento(numero: number): Asiento | null{
        return this.asientos.find(a=>a.numero === numero) || null;
    }
}