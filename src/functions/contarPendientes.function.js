import {ListTodoInstance,lis} from '../index.js'

const contadorPendientes = document.querySelector('.todo-count')
const contarPendientes = () => {
    contadorPendientes.innerText = ListTodoInstance.getContadorPendientes(lis) + " pendiente(s)"
}
export {
    contadorPendientes,
    contarPendientes
}