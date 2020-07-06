import {ListTodoInstance} from '../index.js'
import {Todo} from '../classes/index.js';
import {contarPendientes} from './contarPendientes.function'

const insertarNuevaTarea = (e) => {
    if( e.keyCode === 13 ){
        let nombreTodo = e.target.value
        let todoInstance = new Todo(nombreTodo)
       
        ListTodoInstance.NuevaTarea(todoInstance)
        //console.log(ListTodoInstance)
        //console.log(e)
        e.target.value = ""
        contarPendientes()
    }  
}

export {
    insertarNuevaTarea
}