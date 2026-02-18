export class Asiento{
    constructor(public numero:number, 
                private ocupado:boolean=false
    ){}
    estaDisponible():boolean{
        return !this.ocupado;
    }
    ocupar(){
        if(this.ocupado) throw new Error("Asiento ya ocupado");
        this.ocupado=true;
    }
    liberar(){
        this.ocupado=false;
    }
}