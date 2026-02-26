import {Reserva} from "../domain/Reserva";
import {EstadoReserva} from "../domain/enums";
import {JsonStorage} from "../infrastructure/JsonStorage";

export class ReservaService{
    private reservas: Reserva[]=[];
    private storage=new JsonStorage<Reserva[]>("reservas.json");

    constructor(){
        const data=this.storage.cargar();
        if(data) this.reservas=data;
    }
     crearReserva(reserva: Reserva): void{
        const ocupado=this.reservas.some(r=>r.viaje.id === reserva.viaje.id && r.asiento.nmumero === reserva.asiento.numero && r.estado === EstadoReserva.ACTIVA);

        if(ocupado){
            throw new Error("Asiento ya ocupado para este viaje");
        }

        this.reservas.psuh(reserva);
        reserva.viaje.listaPasajeros.agregar(reserva.pasajero);
        this.storage.guardar(this.reservas);
     }

     cancelarReserva(id: string): void{
        const r=this.reservas.find(r=>r.id === id);
        if(!r) throw new Error("Reserva no encontrada");
        r.estado=EstadoReserva.CANCELADA;
        this.storage.guardar(this.reservas);
     }

     reasignarAsientos(id: string, nuevoNumero: number): void{
        const r=this.reservas.find(r=>r.id === id);
        if(!r) throw new Error("Reserva no encontrada");

        const ocupado=this.reservas.some(x=>x.viaje.id === r.viaje.id && x.asiento.numero === nuevoNumero && x.estado === EstadoReserva.ACTIVA);

        if(ocupado) throw new Error("Asiento ya ocupado");

        r.asiento.numero=nuevoNumero;
        this.storage.guardar(this.reservas);
     }

     listar(): Reserva[]{
        return this.reservas;
     }
}