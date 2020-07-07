export class Todo {

    static fromJson({nombre, estado, id}){
        const instanciaTodo = new Todo (nombre)
        
        instanciaTodo.estado = estado
        instanciaTodo.id = id

        return instanciaTodo
    }

    constructor( nombre ) {
        this.nombre = nombre
        this.estado = false
        this.id = new Date().getTime()
    }

    imprimirTodo() {
        console.log(`${this.nombre} ${this.estado} ${this.id}`)
    }

}
