let questions =  [
{
    id: 1,
    question: "what is a horse?",
    answer: "A four legged animal",
    options:[
        "a man with a long arm",
        "a bad guy in a comic book",
        "a four legged animal",
        "none of the above"
    ]
},
{
    id: 2,
    question: "what is a horse?",
    answer: "A four legged animal",
    options:[
        "a man with a long arm",
        "a bad guy in a comic book",
        "a four legged animal",
        "none of the above"
    ]
},
{
    id: 3,
    question: "what is a horse?",
    answer: "A four legged animal",
    options:[
        "a man with a long arm",
        "a bad guy in a comic book",
        "a four legged animal",
        "none of the above"
    ]
},
{
    id: 4,
    question: "what is a horse?",
    answer: "A four legged animal",
    options:[
        "a man with a long arm",
        "a bad guy in a comic book",
        "a four legged animal",
        "none of the above"
    ]
},
{
    id: 5,
    question: "What is the full form of E-mail",
    answer: "Electronic Mail",
    options: [
        "Electronic Mail",
        "Electric Mail",
        "Engine Mail",
        "None of these"
    ]
  }
];

let question_count = 0;
    
let points = 0;

window.onload = function(){
    show(question_count);
};

function next(){

    //last question
    if (question_count == questions.length - 1){
        sessionStorage.setItem("time", time);
        clearInterval(mytime);
        location.href="end.html";
    }
    console.log(question_count);

    let user_answer = document.querySelector("li.option.active").innerHTML;

    //right or wrong answer checker

    if (user_answer == questions[question_count].answer){
        points += 10;
        sessionStorage.setItem("points", points);
    }

    console.log(points);

    question_count++;
    show(question_count);
}

function show(count){
    let question = document.getElementById("questions");
    let [first, second, third, fourth] = questions[count].options;

    question.innerHTML = `
    <h2>Q${count = 1}. ${questions [count].question}</h2>
        <ul class="option_group">
        <li class="option">${first}</li>
        <li class="option">${second}</li>
        <li class="option">${third}</li>
        <li class="option">${fourth}</li>
        </ul>`;

 toggleActive();
}

function toggleActive(){
    let option = document.querySelectorAll("li.option");
    for (let i = 0; i < option.length; i++){
        option[i].onclick = function(){
            for (let i = 0; i < option.length; i++){
                if (option[i].classList.contains("active")){
                    option[i].classList.remove("active");
                }
            }
            option[i].classList.add("active");
        };
    }
}