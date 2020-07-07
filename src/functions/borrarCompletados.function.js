import {ListTodoInstance, lis} from '../index.js'

const borrarCompletados = () => {
    ListTodoInstance.borrarCompletados(lis)
    ListTodoInstance.guardarLocalStorage()
}
export {
    borrarCompletados
}