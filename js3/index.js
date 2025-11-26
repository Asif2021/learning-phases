
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



function show(){
    document.getElementsByClassName("text")[0].style.visibility = 'visible';
}
function hide(){
    document.getElementsByClassName("text")[0].style.visibility = "hidden";
}



function addTodo(){
    const input = document.getElementById('input').value;
    if(input === '') return;
    const todos = document.createElement('p');
    todos.style.textAlign = 'center';
    todos.style.fontSize = '30px';
    todos.innerText = input;
    document.getElementById('all_todos').appendChild(todos);
    document.getElementById('input').value = '' 
}


