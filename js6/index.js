let counter = document.getElementById('counter');
let timer;

function start(){
    if(timer) return;
timer = setInterval(()=>(
counter.innerText++
), 50);}

function reset(){
    clearInterval(timer);
    timer = null;
    counter.innerText = 0;}

function stop(){
   clearInterval(timer);
   timer = null;
}


   async function showData() {
    const ul = document.getElementById('data_list');
    ul.innerText= '';
    const loading = document.createElement('p');
    loading.id= 'loading';
    loading.innerText= 'Loading...';
    ul.appendChild(loading);
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await response.json();
        loading.remove();
        data.forEach((user)=>{
            const li = document.createElement('li');
            ul.appendChild(li);
            li.innerText= ` Name = ${user.name}
                 Email = ${user.email}`
        })
        } catch (error) {
        console.log('error ', error);
        loading.innerHTML="Failed to load data";
    }
   }


   const p = document.getElementById('data');

   function promiseData(){
     return new Promise(()=>{
        setTimeout(()=>{
            p.innerText='Hello World!!!'
        }, 3000)});
   }

   async function getData(){
    p.innerText='Result in 3 seconds...'
    const data = await promiseData();
    console.log(data);
   }

