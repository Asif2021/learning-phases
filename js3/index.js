
function bgChange (){
const randomNum= Math.floor(Math.random() * 16777215);
const randomCode = '#' + randomNum.toString(16);
document.body.style.backgroundColor = randomCode;
}


function increment(){
    let counter = Number(document.getElementsByClassName("counter")[0].innerText);
    counter++;
    document.getElementsByClassName("counter")[0].innerText = counter;
}
function decrement(){
    let counter = Number(document.getElementsByClassName("counter")[0].innerText);
   counter > 0 ? counter-- : '';
    document.getElementsByClassName("counter")[0].innerText = counter;
}
function reset(){
    document.getElementsByClassName("counter")[0].innerText = 0;
}



function showHide(){
    let showHide = document.getElementById('show_hide');
    showHide.classList.toggle('text');
}
let btnText= document.getElementById('showHide_button');
btnText.addEventListener('click', function(){
    if(btnText.innerText === 'show'){
        btnText.innerText = 'hide';
    } else {
        btnText.innerText = 'show';
    }
})



   
function addTodo(){
    const input = document.getElementById('input');
    const allTodos = document.getElementById('all_todos');
    if(input.value === '') return;
    const li = document.createElement('li');
    li.innerHTML = input.value;
    allTodos.appendChild(li);
    input.value = '';
    const span = document.createElement('span');
    span.innerHTML = '\u00d7';
    li.appendChild(span);
     saveTodos();
   }

const allTodos = document.getElementById('all_todos');
    allTodos.addEventListener('click', function(e){
        if(e.target.tagName === 'LI'){
            e.target.classList.toggle('checked');
            saveTodos();
        } else if (e.target.tagName === 'SPAN') {
            e.target.parentElement.remove();
            saveTodos();
            }
    });

function saveTodos(){
    localStorage.setItem('todos', allTodos.innerHTML);
}

function showTodos(){
    allTodos.innerHTML = localStorage.getItem('todos');
}
showTodos();

