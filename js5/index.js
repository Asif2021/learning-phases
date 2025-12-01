const arr = [1,2,3,4,5,6,7,8,9,10];
function even(){
const newArr =  arr.filter((num)=> num = num % 2 === 0);
console.log(newArr);
}

function sum(){
const sum = arr.reduce((acc, curr) => acc + curr);
console.log(sum);
}


const users = [{name: "Ali", age: 20}, {name:"Sahil", age:19}, {name:"Nadeem", age:25}, {name:"Shoaib", age:32}, {name:"Jimmi", age:35}];
function showName(){
users.forEach((user)=> console.log(user.name));
}

function showAge(){
const checkUserAge = users.filter((user)=> user.age >= 20);
console.log(checkUserAge);
}


function combineArray(){
const arr1 = [1,2,3,4,5];
const arr2 = [6,7,8,9,10];
const combinedArr = [...arr1, ...arr2];
console.log(combinedArr);
}
