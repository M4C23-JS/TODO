export class ListTodo {
     
    constructor(){
        this.todos = []
    }
    NuevaTarea(todo){
        this.todos.push(todo)
        const listTodos = document.querySelector('.todo-list')
        let div = document.createElement('div')
        let estadoTodo = todo.estado ? "completed" : ""
        div.innerHTML = 
        `
        <li class="${estadoTodo}"   data-id="${todo.id}">
            <div class="view">
                <input class="toggle" type="checkbox">
                <label>${todo.nombre}</label>
                <button class="destroy"></button>
            </div>
		</li> 
        `
        listTodos.append(div.firstElementChild)
    }
    completarTarea(id) {
        this.todos[id].estado = true
        
    }
    filtrarLista(filtro,lis){
        for (let x = lis.length-1; x >= 0; x--){
            lis[x].removeAttribute('hidden')
            filtro === 'completados' 
            ? lis[x].classList.value == '' ? lis[x].setAttribute('hidden','') : ''
            : ''      
                
            filtro === 'pendientes'
            ? lis[x].classList.value == 'completed' ? lis[x].setAttribute('hidden','') : '' 
            : ''
        }     
    }
    getContadorPendientes(lis) {
        let arrPendientes = []
        for (let x = lis.length-1; x >= 0; x--){
            if(lis[x].classList.value == '') {
                arrPendientes.push(x)
            }
        }
        return arrPendientes.length

    }   
    borrarCompletados(lis){
        for (let x = lis.length-1; x >= 0; x--){
            lis[x].classList.value == 'completed' ? lis[x].outerHTML = null : ''  
        }
    }

} 