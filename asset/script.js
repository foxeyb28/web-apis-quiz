//WHEN I click the start button
// THEN a timer starts and I am presented with a question
// WHEN I answer a question
// THEN I am presented with another question
// WHEN I answer a question incorrectly
// THEN time is subtracted from the clock
// WHEN all questions are answered or the timer reaches 0
// THEN the game is over
// WHEN the game is over
// THEN I can save my initials and my score
/*
// every question will be a:
{
    question: "what does Css stand for?";
    option1: "option here";
    option2: "another example here";
    option3: "this one too";
    correctanswer: "this is right answer";
}
all questions will be stored in an array, which will look like this:
pq1, q2, 1=q3
*/
var questionarray = [
    {
        question: "Which Pie Filling is needed to make a Peach 3 ingrediant cake",
        options: ["Peach Pie Filling", "Apple Pie Filling", "Cherry Pie Filling", "Blueberry"],
        answer: "Peach Pie Filling"
    },
    {
        question: "How many eggs are needed for the cake",
        options: ["1", "2", "3", "4", "5"],
        answer: "5"
    },
    {
        question: "Is cake mix needed",
        options: ["Yes", "No"],
        answer: "Yes"
    },
    {
        question: " what is the cake cooked in",
        options: ["A Plate", "A Bowl", "A Skillet", "A Bundt Pan"],
        answer: "A Bundt Pan"
    },
]
var index = 0
var questionsDiv = document.querySelector("#quiz-section");

function renderQuestion(questionObj) {
    questionsDiv.innerHTML=""
    var question = document.createElement("h1");
    // get question from obj
    question.textContent = questionObj.question
    questionsDiv.appendChild(question)

    var options = document.createElement("ol");
    questionsDiv.appendChild(options);

    for (let i = 0; i < questionObj.options.length; i++) {
        const element = questionObj.options[i];
        var option1 = document.createElement("li")
        var button = document.createElement("button")
        // get one option from obj
        button.textContent = element;
        button.onclick = checkAnswers
        option1.appendChild(button);
        options.appendChild(option1);

    }

    // var option1 =document.createElement("li")
    // // get one option from obj
    // option1.textContent = "Peach Pie Filling";
    // options.appendChild(option1);

    // var option2 = document.createElement("li");
    // // get one option from obj
    // option2.textContent = "5 Eggs";
    // options.appendChild(option2);

    // var option3 = document.createElement("li");
    // // get one option from obj
    // option3.textContent = "Cake Mix"
    // options.appendChild(option3);

    // var option4 = document.createElement("li");
    // // get one option from obj
    // option4.textContent = "A Bundt Pan"
    // options.appendChild(option4);
}

// object with 3 properties: question, list of options, correct answer
function checkAnswers() {
    console.log("button clicked");
    console.log(this)
    if (this.textContent ===questionarray[index].answer) {
        console.log("correct");
    } else {
       console.log("wrong"); 
    }
    index ++
    if (index >=questionarray.length) {
        console.log("game over")  
        //excute game over function 
    } else {
        renderQuestion(questionarray[index])
        
    }
        
    
}




var endTime;
function startQuiz() {
    console.log("quiz started")
    renderQuestion(questionarray[index])
    //excute timer function here
}