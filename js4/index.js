// function add(a, b) {
//     let sum = a + b;
//     console.log('Sum of two numbers is ' + sum);
//     return sum;
// }
// add(5, 5);


// function reverse() {
//     let text = document.getElementById('reverseInput');
//     let reversed = text.value.split('').reverse().join('');
//     text.value = '';
//     let reversed_text = document.getElementsByClassName('reversed_text')[0];
//     reversed_text.innerText = reversed;
// }


// const arr = [1,2,3,4,5,6,7,8,9];
// function largeNum(arr){
//  console.log('Largest Number of given array is ' + Math.max(...arr));
// }
// largeNum(arr);



function isPrime() {
    let number = Number(document.getElementById('primeInput').value);
    let result = document.getElementsByClassName('prime_text')[0];

    if(number < 2 || isNaN(number)){
        result.innerText = ' Not a Prime Number';
        return;
    }

    for (let i = 2; i < Math.sqrt(number); i++) {
        if(number % i === 0){
            result.innerText = number + ' is not a Prime Number';
            return;
             
        }
    }
    result.innerText = number + ' is a Prime Number';
    number.innerText = '';
}



// following are converted in arrow function 
const add = (a,b) => {
    let sum = a + b;
return console.log('result of add function is ' + sum );
}
add(5,5);


const reverse = () => {
     let text = document.getElementById('reverseInput');
    let reversed = text.value.split('').reverse().join('');
    text.value = '';
    let reversed_text = document.getElementsByClassName('reversed_text')[0];
    reversed_text.innerText = reversed;
}


const arr = [1,2,3,4,5,6,7,8,9];
const largeNum = (arr) => {
 console.log('Largest Number of given array is ' + Math.max(...arr));
}
largeNum(arr);




