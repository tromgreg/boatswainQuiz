let questions =  [
{
    id: 1,
    question: "What is the mechanical advantage of a Gun Tackle",
    answer: "2:1 advantage",
    options:[
        "2:1 advantage",
        "4:1 advantage",
        "3:2 advantage",
        "none of the above"
    ]
},
{
    id: 2,
    question: "How is the size of a block measured?",
    answer: "Measuring the size of the cheek",
    options:[
        "using a caliper on the sheave ",
        "Using the measurement chart in the NAVEDTRA 14343",
        "Measuring the size of the cheek",
        "none of the above"
    ]
},
{
    id: 3,
    question: "The first thing a Boatswain’s Mate must do when analyzing a job is to determine?",
    answer: "the objective of the job",
    options:[
        "the objective of the job",
        "how much hazmat will need to be issued to complete the PMS",
        "weather or not the overhead lighting in the space is working",
        "none of the above"
    ]
},
{
    id: 4,
    question: "Which of the following calls consists of two slurred veer calls?",
    answer: "(Four Side Boys) Tend the side",
    options:[
        "belay",
        "attention",
        "mess call",
        "(Four Side Boys) Tend the side"
    ]
},
{
    id: 5,
    question: "Who is usually responsible for the neatness of the quarterdeck?",
    answer: "OOD Messenger",
    options: [
        "OOD Messenger",
        "Petty Officer of the Watch",
        "Command Duty Officer",
        "Duty Deck Department POC"
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
    <h2>Q${count + 1}. ${questions[count].question}</h2>
     <ul class="option_group">
    <li class="option">${first}</li>
    <li class="option">${second}</li>
    <li class="option">${third}</li>
    <li class="option">${fourth}</li>
  </ul> 
    `;
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