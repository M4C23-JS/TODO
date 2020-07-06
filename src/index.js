import './styles.css'
import {ListTodo} from './classes/index.js';
import {    
    borrarCompletados,
    filtrarTodos,
    filtrarPendientes,
    filtrarCompletados,
    insertarNuevaTarea,
    toggleEstadoTarea} from'./functions/index.js'

const newTodo = document.querySelector('.new-todo');
const todoList = document.querySelector('.todo-list');
const completados = document.querySelector('.completados');
const todos = document.querySelector('.todos');
const pendientes = document.querySelector('.pendientes');
const btnBorrar = document.querySelector('.clear-completed');


const lis = todoList.children
const ListTodoInstance = new ListTodo();

newTodo.addEventListener('keyup',insertarNuevaTarea );
todoList.addEventListener('click', toggleEstadoTarea );
completados.addEventListener('click', filtrarCompletados )
todos.addEventListener('click', filtrarTodos )
pendientes.addEventListener('click', filtrarPendientes )
btnBorrar.addEventListener('click', borrarCompletados)

export {
    ListTodoInstance,
    lis
}
