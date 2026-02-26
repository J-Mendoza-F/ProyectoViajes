import {TipoTarifa} from "./enums";

export class Asiento{
    constructor(
        public numero:number,
        public tipoTarifa:TipoTarifa
    ){}
}