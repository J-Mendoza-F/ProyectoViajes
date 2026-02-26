import {Asiento} from "./Asiento";

export class Bus{
    constructor(
        public id:string,
        public placa:string,
        public asientos:Asiento[]
    ){}
}