import {ListTodoInstance,lis} from '../index.js'
import {contarPendientes} from './contarPendientes.function'

const filtrar = (filtro) => {
    ListTodoInstance.filtrarLista(filtro,lis)
    contarPendientes()
}
const filtrarCompletados = () => filtrar('completados')
const filtrarTodos = () => filtrar('todos')
const filtrarPendientes = () => filtrar('pendientes') 

export {
    filtrar,
    filtrarCompletados,
    filtrarTodos,
    filtrarPendientes
}