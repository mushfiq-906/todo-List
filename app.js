//selectors
let todoInput = document.querySelector('.todo-input'); 
let todoButton = document.querySelector('.todo-button');
let todoList = document.querySelector('.todo-list');
let filterOption = document.querySelector('.filter-todo');
//addEventListener
document.addEventListener('DOMContentLoaded',getToDos);
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);
filterOption.addEventListener('click',filterToDo);

function addTodo(event){
    //prevent from from submitting
    event.preventDefault();
    //create todo Div
    let todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');
    //create li
    let newTodo = document.createElement('li');
    newTodo.textContent = todoInput.value;
    newTodo.classList.add('todo-item');
    //add todo to local storage
    saveLocalToDos(todoInput.value);
    //add li to div
    todoDiv.appendChild(newTodo);
    //check button
    let btn1 = document.createElement('button');
    btn1.innerHTML= '<i class="fas fa-check"></i>';
    btn1.classList.add('complete-btn');
    todoDiv.appendChild(btn1);
    //delete button
    let btn2 = document.createElement('button');
    btn2.innerHTML= '<i class="fas fa-trash"></i>';
    btn2.classList.add('trash-btn');
    todoDiv.appendChild(btn2);
    //append to todoList
    todoList.appendChild(todoDiv);
    //clear todo inputs
    todoInput.value=''; 
}

function deleteCheck(event)
{
    const item = event.target;
    //delete element
    if(item.classList[0]=='trash-btn'){
        const todo = item.parentElement;
        //animation
        todo.classList.add('fall');
        removeLocalTodos(todo);
        setTimeout(function(){
            todo.remove();
        },200);
        
    }

    //marked element
    if(item.classList[0]=='complete-btn'){
        const todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterToDo(event){
    let todos = todoList.childNodes;
    console.log(todos);
    todos.forEach(function(todo){
        switch(event.target.value){
            case 'all':
                todo.style.display='flex';
                break;
            case 'completed':
                if(todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }
                else{
                    todo.style.display = 'none';
                }
                break;
            case 'uncompleted':
                if(!todo.classList.contains('completed')){
                    todo.style.display = 'flex';
                }
                else{
                    todo.style.display = 'none';
                }
                break; 
        }
    });
}


function saveLocalToDos(todo){
    //check if already have!
    let todos;
    if(localStorage.getItem('todos')==null){
        todos=[];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.push(todo);
    localStorage.setItem('todos',JSON.stringify(todos));
}

function getToDos(){
    //check if already have!
    let todos;
    if(localStorage.getItem('todos')==null){
        todos=[];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    todos.forEach(function(todo){
    //create todo Div
        let todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        //create li
        let newTodo = document.createElement('li');
        newTodo.textContent = todo;
        newTodo.classList.add('todo-item');
        //add li to div
        todoDiv.appendChild(newTodo);
        //check button
        let btn1 = document.createElement('button');
        btn1.innerHTML= '<i class="fas fa-check"></i>';
        btn1.classList.add('complete-btn');
        todoDiv.appendChild(btn1);
        //delete button
        let btn2 = document.createElement('button');
        btn2.innerHTML= '<i class="fas fa-trash"></i>';
        btn2.classList.add('trash-btn');
        todoDiv.appendChild(btn2);
        //append to todoList
        todoList.appendChild(todoDiv);
    });
}

function removeLocalTodos(todo){
    //check if already have!
    let todos;
    if(localStorage.getItem('todos')==null){
        todos=[];
    }
    else{
        todos = JSON.parse(localStorage.getItem('todos'));
    }
    let todoIndex = todo.children[0].innerText;
    todos.splice(todos.indexOf(todoIndex), 1);
    localStorage.setItem('todos', JSON.stringify(todos));
}