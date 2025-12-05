

setInterval(()=>{
const clock = new Date().toLocaleTimeString();
document.getElementById('clock').innerText = clock;
}, 1000);



async function getWeather() {
    let input = document.getElementById('weather_input');
    let weather = document.getElementById('weather');
    if (input.value.trim() === '') return;
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${input.value}&units=metric&appid=b0314e9f90cbb565224be35014969805`;
    try {
        const response = await fetch(apiUrl);
        const data = await response.json();
        if (data.name == undefined) {
            weather.innerText = 'City Not Found !!!'
            return;
        }
        weather.innerText = `${data.name} Temperature is ${data.main.temp}°C`
    } catch (error) {
        console.log("error is ", error);
        weather.innerText = 'Something Went Wrong!!!'
    }
    input.value = '';
}



const quizData = [
    {
        q: " JS Stands for ? ",
        a: 'JavaScript',
        b: 'java',
        c: 'JS Bank',
        d: 'jame shiri',
        ans: 'ans1'
    },
    {
        q: " HTML Stands for ? ",
        a: 'hyper text markup language',
        b: 'hyper transfer language',
        c: 'machine language',
        d: 'jscripting language',
        ans: 'ans1'
    },
    {
        q: " CSS Stands for ? ",
        a: 'cascading stylesheet',
        b: 'combine style sheet',
        c: 'central superior services',
        d: 'central super services',
        ans: 'ans1'
    },
]

let answer = document.querySelectorAll('.answer');
let question = document.getElementById('question');
let option_1 = document.getElementById('option_1')
let option_2 = document.getElementById('option_2')
let option_3 = document.getElementById('option_3')
let option_4 = document.getElementById('option_4')
let submitBtn = document.getElementById('submit');
let myScore = document.querySelector('.score');
let currentQuiz = 0;
let score = 0;

question.innerHTML = quizData[currentQuiz].q;
option_1.innerHTML = quizData[currentQuiz].a;
option_2.innerHTML = quizData[currentQuiz].b;
option_3.innerHTML = quizData[currentQuiz].c;
option_4.innerHTML = quizData[currentQuiz].d;

function checkAns() {
    let ans;
    answer.forEach((curr, index) => {
        if (curr.checked) {
            ans = curr.id;
        }
    })
    return ans;
}

function removeSelect() {
    answer.forEach((curr) => {
        curr.checked = false;
    })
}

submitBtn.addEventListener('click', () => {
    let clickedAnswer = checkAns();
    if (clickedAnswer == quizData[currentQuiz].ans) {
        score++
    }
    currentQuiz++;

    removeSelect();

    if (currentQuiz < quizData.length) {
        question.innerText = quizData[currentQuiz].q;
        option_1.innerText = quizData[currentQuiz].a;
        option_2.innerText = quizData[currentQuiz].b;
        option_3.innerText = quizData[currentQuiz].c;
        option_4.innerText = quizData[currentQuiz].d;
    } else {
        myScore.innerHTML = `Your score is ${score} out of ${quizData.length} <br/>
                    <button onclick="location.reload()"> Play Again </button>`;
        submitBtn.style.display = 'none';
    }
})