function submitName(event){
    event.preventDefault();
    let name = document.forms ["name_form"] ["name"] . value;
    
    //save name
    sessionStorage.setItem("name", name);

    location.href = "quiz.html";
    
    console.log(name);

}