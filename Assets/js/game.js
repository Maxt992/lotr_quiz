// getting all required elements
const start_btn = document.querySelector(".start_btn button");
const info_box = document.querySelector(".info_box");
const exit_btn = info_box.querySelector(".buttons .quit");
const continue_btn = info_box.querySelector(".buttons .restart");
const quiz_box = document.querySelector(".quiz_box");

//If start quiz button clicked
start_btn.onclick = ()=> {
    info_box.classList.add("activeInfo"); // show the info box
}

//If Exit button clicked
exit_btn.onclick = ()=> {
    info_box.classList.remove("activeInfo"); // hide the info box
}

//If continue button clicked
continue_btn.onclick = ()=> {
    info_box.classList.remove("activeInfo"); // hide the info box
    quiz_box.classList.add("activeQuiz"); // show the quiz box
    showQuestions(0);
    queCounter(0);
}

let que_count = 0;
let que_numb = 1;

const next_btn = document.querySelector(".next_btn");

//if next button clicked
next_btn.onclick = ()=> {
    if(que_count < questions.length - 1) {
        que_count++;
        que_numb++;
        showQuestions(que_count);
        queCounter(que_numb);
    } else {
        console.log("Questions completed");
    }
        
}

//getting questions and options from array
function showQuestions(index) {
    const que_text = document.querySelector(".que_text");
    const option_list = document.querySelector(".option_list");
    let que_tag = '<span>' + questions[index].numb + '. ' + questions[index].question + '</span>';
    let option_tag = '<div class="option">' + questions[index].options[0] + '<span></span></div>'
                    + '<div class="option">'+ questions[index].options[1] + '<span></span></div>'
                    + '<div class="option">' + questions[index].options[2] + '<span></span></div>'
                    + '<div class="option">' + questions[index].options[3] + '<span></span></div>';
    que_text.innerHTML = que_tag;
    option_list.innerHTML = option_tag;
    const option = option_list.querySelectorAll(".option");
    for (let i = 0; i < option.length; i++) {
        option[i].setAttribute("onclick", "optionSelected(this)");
    }
}

function optionSelected(answer) {
    let userAns = answer.textContent;
    let correctAns = questions[que_count].answer;
    if(userAns == correctAns) {
        console.log("Answer is correct");
    } else {
        console.log("Answer is wrong");
    }
}





function queCounter(index) {
    const bottom_ques_counter = quiz_box.querySelector(".total_que");
    let totalQuesCountTag = '<span><p>' + que_count + '</p>of<p>' + 20 + '</p>Questions</span>';
    bottom_ques_counter.innerHTML = totalQuesCountTag;
}











// restartBtn.addEventListener('click',restart);
// prevBtn.addEventListener('click',prev);
// nextBtn.addEventListener('click',next);
// submitBtn.addEventListener('click',submit);

// var start = true;

// function iterate(id) {
    
//     // Getting the result to display section
//     var result = document.getElementsByClassName('result');
//     result[0].innerText = "";

//     // Getting the question
//     const question = document.getElementById("question");
    
//     // Setting the question text
//     question.innerText = question[id].q;

//     // Getting the options
//     const opt1 = document.getElementById("opt1");
//     const opt2 = document.getElementById("opt2");
//     const opt3 = document.getElementById("opt3");
//     const opt4 = document.getElementById("opt4");

//     // Providing option text
//     opt1.innerText = questions[id].a[0].text;
//     opt2.innerText = questions[id].a[1].text;
//     opt3.innerText = questions[id].a[2].text;
//     opt4.innerText = questions[id].a[3].text;

//     // Providing the true or false value to the options
//     opt1.value = questions[id].a[0].answer;
//     opt2.value = questions[id].a[1].answer;
//     opt3.value = questions[id].a[2].answer;
//     opt4.value = questions[id].a[3].answer;

//     var selected = "";

//     // Show selection for opt1
//     opt1.addEventListener("click", () => {
//         opt1.style.backgroundColor = "lightgoldenrodyellow";
//         opt2.style.backgroundColor = "#ef9614";
//         opt3.style.backgroundColor = "#ef9614";
//         opt4.style.backgroundColor = "#ef9614";
//         selected = opt1.value;
//     })

//     // Show selection for opt2
//     opt2.addEventListener("click", () => {
//         opt1.style.backgroundColor = "#ef9614";
//         opt2.style.backgroundColor = "lightgoldenrodyellow";
//         opt3.style.backgroundColor = "#ef9614";
//         opt4.style.backgroundColor = "#ef9614";
//         selected = opt2.value;
//     })

//     opt3.addEventListener("click", () => {
//         opt1.style.backgroundColor = "#ef9614";
//         opt2.style.backgroundColor = "#ef9614";
//         opt3.style.backgroundColor = "lightgoldenrodyellow";
//         opt4.style.backgroundColor = "#ef9614";
//         selected = opt3.value;
//     })

//     opt4.addEventListener("click", () => {
//         opt1.style.backgroundColor = "#ef9614";
//         opt2.style.backgroundColor = "#ef9614";
//         opt3.style.backgroundColor = "#ef9614";
//         opt4.style.backgroundColor = "lightgoldenrodyellow";
//         selected = opt4.value;
//     })

//     // Grabbing the evaluate button
//     const submit = document.getElementsByClassName("submit");

//     // Evaluate method
//     submit[0].addEventListener("click", () => {
//         if (selected == "true");
//             result[0].innerHTML = "Correct";
//             result[0].style.color = "green";
//         } else {
//             result[0].innerHTML = "Incorrect";
//             result[0].style.color = "red";
//         })
//     }
// }










// // Function 'startGame'

// // function beginQuiz() {

// //     currentQuestion = 0;
// //     questionText.innerHTML = questions[currentQuestion].question;
// //     trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
// //     trueBtn.onclick = () => {
// //         let ano= 0;
// //         if (questions[currentQuestion].answers[ano].answer){
// //             if(score<20){
// //                 score++;
// //             }
// //         }
// //         userScore.innerHTML = score;
// //         if(currentQuestion<2){
// //             next();
// //         }
// //     }
// //     falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
// //     falseBtn.onclick = () => {
// //         let ano= 1;
// //         if(questions[currentQuestion].answers[ano].answer){
// //             if(score<20){
// //                 next();
// //             }
// //         }
// //     }    
// //     prevBtn.classList.add('hide');
// // }

// // beginQuiz();

// // function restart() {
// //     currentQuestion = 0;
// //     prevBtn.classList.remove('hide');
// //     nextBtn.classList.remove('hide');
// //     submitBtn.classList.remove('hide');
// //     aBtn.classList.remove('hide');
// //     bBtn.classList.remove('hide'); 
// //     cBtn.classList.remove('hide');
// //     dBtn.classList.remove('hide');
// //     score = 0;
// //     userScore.innerHTML = score;
// //     beginQuiz();
// // } 
    
// // function next(){
// //     currentQuestion++;
// //     if(currentQuestion>=2){
// //         nextBtn.classList.add('hide');
// //         prevBtn.classList.remove('hide');
// //     }
// //     questionText.innerHTML = questions[currentQuestion].question;
// //     trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
// //     trueBtn.onclick = () => {
// //         let ano= 0;
// //         if(questions[currentQuestion].answers[ano].answers){
// //             if(score<20){
// //                 score++;
// //             }
// //         }
// //         userScore.innerHTML = score;
// //         if(currentQuestion<2){
// //             next();
// //         }
// //     }
// //     falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
// //     falseBtn.onclick = () => {
// //         let ano=1;
// //         if(questions[currentQuestion].answers[ano].answer){
// //             if(score<20){
// //                 score++;
// //             }
// //         }
// //         userScore.innerHTML = score;
// //         if(currentQuestion<2){
// //             next();
// //         }
// //     }
// //     prev.classList.remove('hide');
// // }

// // function prev(){
// //     currentQuestion--;
// //     if(currentQuestion<=2){
// //         nextBtn.classList.add('hide');
// //         prevBtn.classList.remove('hide');
// //     }
// //     questionText.innerHTML = questions[currentQuestion].question;
// //     trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
// //     trueBtn.onclick = () => {
// //         let ano= 0;
// //         if(questions[currentQuestion].answers[ano].answers){
// //             if(score<20){
// //                 score++;
// //             }
// //         }
// //         userScore.innerHTML = score;
// //         if(currentQuestion<2){
// //             next();
// //         }
// //     }
// //     falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
// //     falseBtn.onclick = () => {
// //         let ano=1;
// //         if(questions[currentQuestion].answers[ano].answer){
// //             if(score<20){
// //                 score++;
// //             }
// //         }
// //         userScore.innerHTML = score;
// //         if(currentQuestion<2){
// //             next();
// //         }
// //     }
// //     next.classList.remove('hide');
// // }

// // function submit() {
// //     prevBtn.classList.add('hide');
// //     nextBtn.classList .add('hide');
// //     submitBtn.classList.add('hide');
// //     trueBtn.classList.add('hide');
// //     falseBtn.classList.add('hide');
// //     questionText.innerHTML = "Let us see whether or not you shall pass...";
// // }
// // // Function 'answerQuestion'

// //     // Check if the selected answer is correct

// //         // IF the answer is wrong

// //             // THEN we need to subtract from 'countdown'

// //             // Optional: DISPLAY "right" or "wrong"

// //         // Display the next question

// // // Function 'displayCurrentQuestion'






// // // DECLARE 'timer' number
// // let totalSeconds = 250;
// // let timeRemaining = totalSeconds;
// // let secondsElapsed = 0;
// // // let currentQuestion = 0;
// // let progress = 0;




// // var currentQuestion = 0;
// // var viewingAns = 0;
// // var correctAnswers = 0;
// // var quizOver = false;
// // var iSelectedAnswer = [];
// //     var c = 180;
// //     var t;


// // $(document).ready(function() {
// //     displayCurrentQuestion();
// //     $(this).find(".quizMessage").hide();
// //     $(this).find(".preButton").attr('disabled', 'disabled');

// //     timedCount();

// //     $(this).find(".preButton").on("click", function () {
// //         if (!quizOver) {
// //             if(currentQuestion == 0) {return false;}

// //             if(currentQuestion == 1) {
// //                 $(".preButton").attr('disabled', 'disabled');
// //             }

// //             currentQuestion--;
// //             if (currentQuestion < questions.length) {
// //                 displayCurrentQuestion();
// //             }
// //         } else {
// //             if(viewingAns == 3) {return false; }
// //             currentQuestion = 0; viewingAns = 3;
// //             viewResults();
// //         }
// //     });

// //     $(this).find(".nextButton").on("click", function () {
// //         if (!quizOver) {
// //             var val = $("input[type='radio']:checked").val();

// //             if (val == undefined) {
// //                 $(document).find(".quizMessage").text("Please select an answer");
// //                 $(document).find(".quizMessage").show();
// //             } else {
// //                 $(document).find(".quizMessage").hide();
// //                 if (val == question[currentQuestion].correctAnswer) {
// //                     correctAnswers++;
// //                 }
// //                 iSelectedAnswer[currentQuestion] = val;

// //                 currentQuestion++;

// //                 if(currentQuestion >= 1) {
// //                     $('.preButton').prop("disabled", false);
// //                 }

// //                 if(currentQuestion < questions.length) {
// //                     displayCurrentQuestion();
// //                 } else {
// //                     displayScore();
// //                     $('#iTimeShow').html('Quiz Time Completed!');
// //                     $('#timer').html("You scored: " + correctAnswers + " out of: " + questions.length);
// //                     c = 185;
// //                     $(document).find(".preButton").text("View Answer");
// //                     $(document).find(".nextButton").text("Play Again?");
// //                     quizOver = true;
// //                     return false;
// //             }
// //         }
// //     } else {
// //         quizOver = false; $('#iTimeShow').html('Time Remaining:');
// //         iSelectedAnswer = [];
// //         $(document).find(".nextButton").text("Next Question");
// //         $(document).find(".preButton").text("Previous Question");
// //             $(".preButton").attr('disabled', 'disabled');
// //         resetQuiz();
// //         viewingAns = 1;
// //         displayCurrentQuestion();
// //         hideScore();
// //     } 
// //     });
// // });



// // function timedCount() {
// //     if(c == 185) {
// //         return false;
// //     }

// //     var hours = parseInt ( c / 3600) % 24;
// //     var minutes = parseInt( c / 60) % 60;
// //     var seconds = c % 60;
// //     var result = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
// //     $('#timer').html(result);

// //     if(c == 0) {
// //         displayScore();
// //         $('#iTimeShow').html('Quiz Time Completed!');
// //         $('#timer').html("You scored: " + correctAnswers + " out of: " + questions.length);
// //         c= 185;
// //         $(document).find(".preButton").text("View Answer");
// //         $(document).find(".nextButton").text("Play Again?");
// //         quizOver = true;
// //         return false;
// //     }

// //     c = c - 1;
// //     t = setTimeout(function() {
// //         timedCount();
// //     },1000);
// // }

// // function displayCurrentQuestion() {
// //     if(c == 185) {
// //         c = 180; timedCount();
// //     }

// //     var question = questions[currentQuestion].question;
// //     var questionClass = $(document).find(".quizContainer > .question");
// //     var choiceList = $(document).find("quizContainer > .choiceList");
// //     var numChoices = questions[currentQuestion].choices.length;
// //     // Set the questionClass text to the current question
// //     $(questionClass).text(question);
// //     // Remove all current <li> elements (if any)
// //     $(choiceList).find("li").remove();
// //     var choice;

// //     for (i = 0; i < numChoices; i++)

// //     {
// //         choice = questions[currentQuestion].choices[i];

// //         if(iSelectedAnswer[currentQuestion] == i) {
// //             $('<li><input type="radio" class="radio-inline" checked="checked" value=' + i + ' name="dynradio" />' + ' ' + choice + '</li>').appendTo(choiceList);
// //         } else {
// //             $('<li><input type="radio" class="radio-inline" value=' + i + ' name="dynradio" />' + ' ' + choice + '</li>').appendTo(choiceList);
// //         }
// //     }
// // }

// // function resetQuiz() {
// //     currentQuestion = 0;
// //     correctAnswers = 0;
// //     hideScore();
// // }

// // function displayScore() {
// //     $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
// //     $(document).find(".quizContainer > .result").show();
// // }

// // function hideScore() {
// //     $(document).find(".result").hide();
// // }

// // // This displays the current question AND the choices
// // function viewResults()
// // {
// //     if(currentQuestion == 20) { currentQuestion = 0;return false; }
// //     if(viewingAns == 1) {return false; }

// //     hideScore();
// //         var question = questions[currentQuestion].question;
// //         var questionClass = $(document).find(".quizContainer > .question");
// //         var choiceList = $(document).find(".quizContainer > .choiceList");
// //         var numChoices = questions[currentQuestion].choices.length;
// //         // Set the questionClass text to the current question
// //         $(questionCLass).text(question);
// //         // Remove all current <li> elements (if any)
// //         $(choiceList).find("li").remove();
// //         var choice;

// //     for (i = 0; i < numChoices; i++) {

// //         choice = questions[currentQuestion] == i

// //     if(iSelectedAnswer[currentQuestion] == i) {
// //             if(questions[currentQuestion].correctAnswer == i) {
// //                 $('<li style="border:2px solid green;margin-top:10px;"><input type="radio" class+"radio-inline" checked="checked"  value=' + i + ' name="dynradio" />' + ' ' + choice + '</li>').appendTo(choiceList);
// //             } else {
// //                 $('<li style="border: 2px solid red;margin-top:10px;"><input type="radio" class="radio-inline" checked="checked"  value=' + i + ' name="dynradio" />' + ' ' + choice + '</li>').appendTo(choiceList);
// //             }
// //         } else {
// //             if(questions[currentQuestion].correctAnswer == i) {
// //                 $('<li style="border:2px solid green;margin-top: 10px;"><input type="radio" class="radio-inline" value=' + i + ' name="dynradio" />' + ' ' + choice = '</li>').appendTo(choiceList);
// //             } else {
// //                 $('<li><input type="radio" class="radio-inline" value=' + i + ' name="dynradio" />' + ' ' + choice + '</li>').appendTo(choiceList);
// //             }
// //         }
// //         }
// //     currentQuestion++;

// //     setTimeout(function() {
// //         viewResults();
// //     },3000);

// // }

