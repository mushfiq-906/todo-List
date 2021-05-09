//selectors
let todoInput = document.querySelector('.todo-input'); 
let todoButton = document.querySelector('.todo-button');
let todoList = document.querySelector('.todo-list');

//addEventListener
todoButton.addEventListener('click',addTodo);
todoList.addEventListener('click',deleteCheck);

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


