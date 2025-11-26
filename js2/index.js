const marks = Number(prompt("Enter obtained marks"));

if (marks == "" || marks > 100 || isNaN(marks) || marks < 0 ) {
alert("Please enter correct marks");    
} else {
switch (true) {
    case marks >=90: document.getElementById('grade').innerText = 'Your Grade is A';
        break;
    case marks >=75: document.getElementById('grade').innerText = 'Your Grade is B';
        break;
    case marks >=65: document.getElementById('grade').innerText = 'Your Grade is C';
        break;
    case marks >=50: document.getElementById('grade').innerText = 'Your Grade is D';
        break;

    default: document.getElementById('grade').innerText = 'Your Grade is F';
        break;
}}


function hundred() {
    for (let i = 0; i <= 100; i++) {
        console.log(i);
    }
}

function even() {
    for (let i = 0; i <= 50; i++) {
        if(i % 2 == 0){
            console.log(i)
        }
    }
}

function odd() {
    let count = 0;
    while (count < 50) {
        count++;
        if (count % 2 !== 0) {
            console.log(count);
        }
    }
}


function sum() {
    let sum = 0;
    let total = 1;
    do {
        sum += total;
        total++;
        console.log(sum);
    } while (total <= 50);
}