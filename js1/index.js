const userName = prompt("Please enter your name");
if (userName === '') {
    alert("no name found")
} else {
    console.log(userName);
}

const userAge = prompt("Please enter your age");
if (userAge === '') {
    alert("no data found")
} else {
    console.log(userAge);
}

let isStudent = prompt("Are you Student? type yes/no");
if (isStudent == 'yes') {
    console.log(userName + " is a Student")
} else if (isStudent == 'no') {
    console.log(userName + " is not a student")
} else {
    alert("Please type yes/no for verification")
}
 



console.log('Addition ', 5 + 5);
console.log('Subtraction ', 5 - 5);
console.log('Multiplication ', 5 * 5);
console.log('Division ', 5 / 5);
console.log("Remainder " , 5 % 5);
let a = 10 - 5;
let b = 10 * 5;
if (b > a) {
    console.log("Check file named (index.js) to see code!!!!")
}








