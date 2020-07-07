import {ListTodoInstance } from '../index.js'
import {contarPendientes} from './contarPendientes.function'

const toggleEstadoTarea = (e) => {
    if (e.target.className === "toggle"){
        let li = e.target.parentElement.parentElement
        let dataId = e.target.parentElement.parentElement.getAttribute('data-id')
        //let s = ListTodoInstance.todos.map(e => e.id == dataId )
        let arr = Array.from(ListTodoInstance.todos)
        let arr2 = arr.filter(e => e.id == dataId)
        arr2[0].estado = arr2[0].estado ? false : true
        arr2[0].estado ? li.classList.add('completed') : li.classList.remove('completed')
        
        //console.log(s)
        //console.log(dataId)
        //console.log(arr)
        //console.log(arr2[0])
        contarPendientes()
        ListTodoInstance.guardarLocalStorage()
    }
}

export {
    toggleEstadoTarea
}