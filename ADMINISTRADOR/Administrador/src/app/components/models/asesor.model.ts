export class Asesor{
    id: Number
    nombre: string
    username: string;
    password: string;
    entidad: Number;


    constructor(id: Number, nombre: string, usuario: string, password: string, entidad: Number){
        this.id = id
        this.nombre = nombre
        this.username = usuario
        this.password = password
        this.entidad = entidad
    }
}