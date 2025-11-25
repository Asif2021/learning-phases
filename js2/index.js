const marks = Number(prompt("Enter obtained marks"));

if (marks == "" || marks > 100 || marks == isNaN) {
alert("Please enter correct marks");    
}

switch (true) {
    case marks >=90: console.log("Grade A")
        break;
    case marks >=75: console.log("Grade B")
        break;
    case marks >=65: console.log("Grade C")
        break;
    case marks >=50: console.log("Grade D")
        break;

    default: console.log("Grade F")
        break;
}