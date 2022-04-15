
let array = [];


const container = document.createElement('div');
container.classList.add('container');

const todoList = document.createElement('div');
todoList.classList.add('todoList');

const header = document.createElement('header');
header.style.backgroundColor = '#FFDC40';
header.style.height = '40px';

const todoListforinput = document.createElement('div');
todoListforinput.classList.add('todoListforinput');

const h1 = document.createElement('h1');

const filtering= document.createElement('div');
filtering.classList.add('filtering');

const inputText = document.createElement('INPUT');

const add_delete = document.createElement('div');
add_delete.classList.add('add_delete');

const addToDoButton = document.createElement('button');

const clearToDo = document.createElement('button');


function createTodo() {
    
    document.body.appendChild(container);
    container.appendChild(todoList);
    todoList.prepend(header);
    
    todoList.appendChild(todoListforinput);
        
    todoListforinput.appendChild(h1);
    h1.setAttribute('id', 'title');
    h1.innerHTML = 'To Do List';

                
    todoListforinput.appendChild(filtering);

    filtering.innerHTML='<i class="fa-solid fa-arrow-up-wide-short fa-lg"></i>'

    
    todoListforinput.appendChild(inputText);
    inputText.setAttribute('type', 'text');
    inputText.setAttribute('id', 'inputText');
    inputText.setAttribute('placeholder','Описание')
    
    todoListforinput.appendChild(add_delete);

    add_delete.appendChild(addToDoButton);
    addToDoButton.setAttribute('type','submit');
    addToDoButton.setAttribute('id','addbutton');

    addToDoButton.innerHTML= '<i class="fa-solid fa-plus"></i>';
    addToDoButton.innerHTML +='Добавить';

    add_delete.appendChild(clearToDo);
    clearToDo.setAttribute('type', 'submit');
    clearToDo.setAttribute('id', 'clearToDo');
    clearToDo.innerHTML= '<i class="fa-solid fa-xmark"></i>';
    clearToDo.innerHTML += 'Удалить';
    document.body.style.cssText = 'background-color: #e7dfd0;font-family: sans-serif;width: 95%;min-height: 100vh;display: flex;justify-content: center;align-items: center;'
}

createTodo();  // Фунция отображения todo

const toDoContainer = document.createElement('div');
    
    todoListforinput.appendChild(toDoContainer);
    toDoContainer.setAttribute('id', 'toDoContainer');

    const listfortasks = document.createElement('ul');
    toDoContainer.appendChild(listfortasks);
    listfortasks.classList.add('listfortasks');

    addToDoButton.addEventListener('click', function() {      //клик на добавление
        if(inputText.value === "") return;
        toDoContainer.classList.add('to-dos');
        listfortasks.innerHTML = '';
        array.push(inputText.value);

        

        for (let i = 0; i < array.length; i++) {
            const eachTask = document.createElement("li");
            const eachInput = document.createElement('input');
            eachInput.setAttribute('id', 'eachInput');         
            eachTask.classList.add('eachTask');
            const deleteicon = document.createElement('button');
            eachInput.value = array[i];
            eachTask.appendChild(eachInput);
            // eachTask.appendChild(document.createTextNode(array[i]));
            listfortasks.appendChild(eachTask);
            eachInput.addEventListener('keyup', () => {
                array[i] = eachInput.value;
                eachInput.value = array[i];

            })
            
        
            
            deleteicon.classList.add('deleteicon');
            eachTask.appendChild(deleteicon);
            deleteicon.innerHTML= '<i class="fa-solid fa-xmark"></i>';

            deleteicon.addEventListener('click', function(){
                listfortasks.removeChild(eachTask);
                array = array.filter((el, index) => index !== i);
                if (listfortasks.innerHTML === "") {
                    array.length = 0;
                    toDoContainer.classList.remove('to-dos')
                }
            });

            clearToDo.addEventListener('click', function(){
                listfortasks.innerHTML = '';
                array.length = 0;
                toDoContainer.classList.remove('to-dos')
                
            })

           

            
        }


        // listfortasks.innerHTML = inputText.value;
        inputText.value = "";

        

        console.log(array)
        
        // eachTask.addEventListener('click', function(){
        //     eachTask.style.textDecoration === "" ? eachTask.style.textDecoration = 'line-through' : eachTask.style.textDecoration = "";
        // });

        
    

    })

    document.querySelector('.filtering').addEventListener('click', function() {     //сортировка начинается тут
        if(filtering.innerHTML==='<i class="fa-solid fa-arrow-up-wide-short fa-lg"></i>'){
        
            array.sort((a, b) => a.toLowerCase() < b.toLowerCase() ? -1 : 1);
            listfortasks.innerHTML = '';
            for (let i = 0; i < array.length; i++) {
                const eachTask = document.createElement("li");
                const eachInput = document.createElement('input');
                eachInput.setAttribute('id', 'eachInput'); 
                eachTask.classList.add('eachTask');
                const deleteicon = document.createElement('button');
                eachInput.value = array[i];
                eachTask.appendChild(eachInput);
                listfortasks.appendChild(eachTask);
                eachInput.addEventListener('keyup', () => {
                    array[i] = eachInput.value;
                    eachInput.value = array[i];
    
                })
            
                
                deleteicon.classList.add('deleteicon');
                eachTask.appendChild(deleteicon);
                deleteicon.innerHTML= '<i class="fa-solid fa-xmark"></i>';
                filtering.innerHTML='<i class="fa-solid fa-arrow-down-wide-short fa-lg"></i>'

                deleteicon.addEventListener('click', function(){
                    listfortasks.removeChild(eachTask);
                    array = array.filter((el, index) => index !== i);
                    if (listfortasks.innerHTML === "") {
                        array.length = 0;
                        toDoContainer.classList.remove('to-dos')
                    }
                });
    
                clearToDo.addEventListener('click', function(){
                    listfortasks.innerHTML = '';
                    array.length = 0;
                    toDoContainer.classList.remove('to-dos')
                    
                })

                
            }
        }

        else{

        
            array.sort((a, b) => a.toLowerCase() < b.toLowerCase() ? 1 : -1);
            listfortasks.innerHTML = '';
            for (let i = 0; i < array.length; i++) {
                const eachTask = document.createElement("li");
                const eachInput = document.createElement('input');
                eachInput.setAttribute('id', 'eachInput'); 
                eachTask.classList.add('eachTask');
                const deleteicon = document.createElement('button');
                eachInput.value = array[i];
                eachTask.appendChild(eachInput);
                listfortasks.appendChild(eachTask);
                eachInput.addEventListener('keyup', () => {
                    array[i] = eachInput.value;
                    eachInput.value = array[i];
    
                })
                
                    
                deleteicon.classList.add('deleteicon');
                eachTask.appendChild(deleteicon);
                deleteicon.innerHTML= '<i class="fa-solid fa-xmark"></i>';
                filtering.innerHTML='<i class="fa-solid fa-arrow-up-wide-short fa-lg"></i>'

                deleteicon.addEventListener('click', function(){
                    listfortasks.removeChild(eachTask);
                    array = array.filter((el, index) => index !== i);
                    if (listfortasks.innerHTML === "") {
                        array.length = 0;
                        toDoContainer.classList.remove('to-dos')
                    }
                });
    
                clearToDo.addEventListener('click', function(){
                    listfortasks.innerHTML = '';
                    array.length = 0;
                    toDoContainer.classList.remove('to-dos')
                    
                })
            }

         }






    })



console.log(array)