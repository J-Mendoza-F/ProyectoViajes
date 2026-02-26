import fs from "fs";

export class JsonStorage<T>{
    constructor(
        private path:string
    ){}

    guardar(data: T): void{
        fs.writeFileSync(this.path, JSON.stringify(data, null, 2), "utf-8");
    }

    cargar(): T | null{
        if(!fs.existsSync(this.path)) return null;
        const raw=fs.readFileSync(this.path, "utf-8");
        return JSON.parse(raw) as T;
    }
}