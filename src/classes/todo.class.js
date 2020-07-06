export class Todo {
    constructor( nombre ) {
        this.nombre = nombre
        this.estado = false
        this.id = new Date().getTime()
    }

}
