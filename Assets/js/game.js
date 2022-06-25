// DECLARE the 'timeEl'
var timeEl = document.getElementById('timer');
// OR document.querySelector('#timer'); would work || querySelectorAll grabs ALL elements with id tag.

const restartBtn = document.getElementById('restart');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');
const submitBtn = document.getElementById('submit');
const aBtn = document.getElementById('opt1');
const bBtn = document.getElementById('opt2');
const cBtn = document.getElementById('opt3');
const dBtn = document.getElementById('opt4');
const userScore = document.getElementById('user-score');
const questionText = document.getElementById('question-text');

let currentQuestion = 0;
var score = 0;

// DECLARE 'questions' array

const questions = [{
    id: 0,
    question: "1: What is the name of the fictional setting in which The Lord of the Rings takes place?",
    answers: [
        {option:"Narnia", answer:false}, 
        {option:"Middle Earth", answer:true},
        {option:"Hogwarts", answer:false}, 
        {option:"Westeros", answer:false},
    ]
}, {
    id: 1,
    question: "2: Who is entrusted with the quest to destroy The One Ring?",
    answers: [
        {option:"A Witcher, Geralt of Rivia", answer:false},
        {option:"A member of the Tribunal, Lord Vivec of Morrowind", answer:false},
        {option:"A Hobbit, Frodo Baggins of the Shire", answer:true},
        {option:"The Human Ranger, Minsc of Rasheman alongside his trusty hamster, Boo", answer:false}
    ]
}, {
    id: 2,
    question: "3: How many rings of power were made for the Elves, Dwarves, and Men?",
    answers: [
        {option:"Three for the Elves, Seven for Dwarves, and Nine for Men", answer:true},
        {option:"Six for the ELves, Six for the Dwarves, and Six for Men", answer:false},
        {option:"Trick Question. No Rings were made other than The ONE Ring", answer:false},
        {option:"One thousand for the army of Elven Warriors, Nineteen-Thousand for the Dwarven Warlords under The Misty Mountain, and the Race of Men were given nothing", answer:false}
    ]
}, {
    id: 3,
    question: "4: What is the name of the mountain where the Master Ring was made?",
    answers: [
        {option:"Mount Devious", answer:false},
        {option:"Mount Dreary", answer:false}, 
        {option:"Mount Death", answer:false}, 
        {option:"Mount Doom", answer:true},
    ]
}, {
    id: 4,
    question: "5: What was the name of Sauron's Fortress in Mordor?",
    answers: [
        {option:"Minas Morgul", answer:false}, 
        {option:"Barad-dûr", answer:true}, 
        {option:"Orthanc", answer:false}, 
        {option:"Cirith Ungol", answer:false}
    ]
}, {
    id: 5,
    question: "6: What is the name of the bridge that Gandalf destroys in the battle with the Balrog of Moria?",
    answers: [
        {option:"The Morgul Bridge", answer:false},
        {option:"Tharbad", answer:false}, 
        {option:"The Bridge of Khazad-dûm", answer:true},
        {option:"The Brandywine Bridge", answer:false}
    ]
}, {
    id: 6,
    question: "7: Who owned the Ring of Power until Bilbo Baggins picked it up in the cave?",
    answers: [
        {option:"The Witch-King of Angmar", answer:false},
        {option:"Gollum/Sméagol", answer:true},
        {option:"The Mouth of Sauron", answer:false},
        {option:"Boromir of Gondor", answer:false}
    ]
}, {
    id: 7,
    question: "8: What was the name of the demonic spider that lived in the caves of Cirith Ungol?",
    answers: [
        {option:"Shelob", answer:true}, 
        {option:"Aragog", answer:false},
        {option:"Lolth", answer:false}, 
        {option:"Chaos Witch Quelaag", answer:false}
    ]
}, {
    id: 8,
    question: "9: In 'The Lord of the Rings: The Return of the King', which army does Aragorn summon using the Sword of Elendil?",
    answers: [
        {option:"The Rohirrim", answer:false},
        {option:"The Night's Watch", answer:false},
        {option:"The Army of Darkness", answer:false}, 
        {option:"The Army of the Dead", answer:true}
    ]
}, {
    id: 9,
    question: "10: What does Gollum call the Ring of Power?",
    answers: [
        {option:"My Precious", answer:true}, 
        {option:"My Wedding Band", answer:false}, 
        {option:"My Only Friendses", answer:false}, 
        {option:"Sally", answer:false}
    ]
}, {
    id: 10,
    question: "11: What group composed the Fellowship of the Ring?",
    answers: [
        {option:"Geralt of Rivia, Dandelion the bard, the sorceresses Triss Merigold and Yennefer of Vengerberg, and the dwarf Zoltan Chivay", answer:false}, 
        {option:"Knight Lautrec of Carim, Andre and Solaire of Astora, Siegmeyer of Catarina, and Patches the Hyena", answer:false},
        {option:"Frodo Baggins of the Shire, Samwise Gamgee, Meridoc Brandybuck, Peregrin Took, the ranger Aragorn, Boromir of Gondor, Legolas of the Woodland Realm, the dwarf Gimli, and Gandalf the Grey", answer:true}, 
        {option:"Jon Snow of Winterfell, Tyrion Lannister, Gregor and Sandor 'The Hound' Clegane, Daenerys Targaryen, and Lord Eddard Stark", answer:false}
    ]
}, {
    id: 11,
    question: "12: What is the name of the reforged version of the 'sword that was broken'?",
    answers: [
        {option:"Sting, the Spider's Bane", answer:false}, 
        {option:"Glamdring, the Foe-Hammer", answer:false},
        {option:"Andúril, the Flame of the West", answer:true}, 
        {option:"Orcrist, the Goblin-Cleaver", answer:false}
    ]
}, {
    id: 12,
    question: "13: What does Aragorn say right before charging into the last battle in Mordor?",
    answers: [
        {option:"'DEATH!'", answer:false}, 
        {option:"'For Frodo!'", answer:true}, 
        {option:"'I'll kill everyone one of you damned dirty orcs!'", answer:false}, {option:"'Elendil!'", answer:false}
    ]
}, {
    id: 13,
    question: "14: Who is Isildur's heir, also heir to the throne of Gondor, and known as 'Strider' and 'Dunadan'?",
    answers: [
        {option:"Boromir of Gondor", answer:false},
        {option:"Aragorn, son of Arathorn", answer:true}, 
        {option:"Samwise Gamgee, Frodo's gardener", answer:false},
        {option:"The humble student, Maxwell, on of Leland", answer:false}
    ]
}, {
    id: 14,
    question: "15: What are potatoes, and what are they good for?",
    answers: [
        {option:"Absolutely nothing", answer:false},
        {option:"A root vegetable; they have plenty of uses", answer:false},
        {option:"'PO-TA-TOES? Boil 'em, mash 'em, stick 'em in a stew. Lovely big golden chips with a nice piece of fried fish.", answers:true},
        {option:"A tuber, generally cooked until soft and prepared as a side dish", answer:false}]
}, {
    id: 15,
    question: "16: Which is NOT one of Gandalf's many nicknames?",
    answers: [
        {option:"The Grey Pilgrim", answer:false}, 
        {option:"Gandalf Greyhame", answer:false},
        {option:"Gandalf Stormcrow", answer:false}, 
        {option:"Flame of Udun", answer:true}
    ]
}, {
    id: 16,
    question: "17: What does the Elvish word 'Mellon' mean?",
    answers: [
        {option:"Friend", answer:true},
        {option:"Watermelon", answer:false}, 
        {option:"Lord of the Woodland Realm", answer:false}, 
        {option:"A measurement of distance, '...as the crow flies'", answer:false}
    ] 
}, {
    id: 17,
    question: "18: What unusual property does Frodo notice about the Ring?",
    answers: [
        {option:"It makes his ring finger swell up", answer:false}, 
        {option:"It grows heavier", answer:true},
        {option:"He can see long distances when peering through it", answer:false}, 
        {option:"It makes Samwise find him particularly attractive", answer:false}
    ]
}, {
    id: 18,
    question: "19: Where are they taking the Hobbits?",
    answers: [
        {option:"Fangorn Forest", answer:false}, 
        {option:"The Lands Between", answer:false}, 
        {option:"Isengard", answer:true}, 
        {option:"Rohan", answer:false}
    ]
}, {
    id: 19,
    question: "20: What do the Uruk-Hai of Isengard bear upon their helms?",
    answers: [
        {option:"The White Hand of Saruman", answer:true}, 
        {option:"A Flaming Ring on a Black Crest", answer:false},
        {option:"The White Tree of Gondor", answer:false}, 
        {option:"The Leaves of Lothlorien", answer:false}
    ]
}]


restartBtn.addEventListener('click',restart);
prevBtn.addEventListener('click',prev);
nextBtn.addEventListener('click',next);
submitBtn.addEventListener('click',submit);

var start = true;

function iterate(id) {
    
    // Getting the result to display section
    var result = document.getElementsByClassName('result');
    result[0].innerText = "";

    // Getting the question
    const question = document.getElementById("question");
    
    // Setting the question text
    question.innerText = question[id].q;

    // Getting the options
    const opt1 = document.getElementById("opt1");
    const opt2 = document.getElementById("opt2");
    const opt3 = document.getElementById("opt3");
    const opt4 = document.getElementById("opt4");

    // Providing option text
    opt1.innerText = questions[id].a[0].text;
    opt2.innerText = questions[id].a[1].text;
    opt3.innerText = questions[id].a[2].text;
    opt4.innerText = questions[id].a[3].text;

    // Providing the true or false value to the options
    opt1.value = questions[id].a[0].answer;
    opt2.value = questions[id].a[1].answer;
    opt3.value = questions[id].a[2].answer;
    opt4.value = questions[id].a[3].answer;

    var selected = "";

    // Show selection for opt1
    opt1.addEventListener("click", () => {
        opt1.style.backgroundColor = "lightgoldenrodyellow";
        opt2.style.backgroundColor = "#ef9614";
        opt3.style.backgroundColor = "#ef9614";
        opt4.style.backgroundColor = "#ef9614";
        selected = opt1.value;
    })

    // Show selection for opt2
    opt2.addEventListener("click", () => {
        opt1.style.backgroundColor = "#ef9614";
        opt2.style.backgroundColor = "lightgoldenrodyellow";
        opt3.style.backgroundColor = "#ef9614";
        opt4.style.backgroundColor = "#ef9614";
        selected = opt2.value;
    })

    opt3.addEventListener("click", () => {
        opt1.style.backgroundColor = "#ef9614";
        opt2.style.backgroundColor = "#ef9614";
        opt3.style.backgroundColor = "lightgoldenrodyellow";
        opt4.style.backgroundColor = "#ef9614";
        selected = opt3.value;
    })

    opt4.addEventListener("click", () => {
        opt1.style.backgroundColor = "#ef9614";
        opt2.style.backgroundColor = "#ef9614";
        opt3.style.backgroundColor = "#ef9614";
        opt4.style.backgroundColor = "lightgoldenrodyellow";
        selected = opt4.value;
    })

    // Grabbing the evaluate button
    const submit = document.getElementsByClassName("submit");

    // Evaluate method
    submit[0].addEventListener("click", () => {
        if (selected == "true");
            result[0].innerHTML = "Correct";
            result[0].style.color = "green";
        } else {
            result[0].innerHTML = "Incorrect";
            result[0].style.color = "red";
        })
    }
}

// Function 'startGame'

// function beginQuiz() {

//     currentQuestion = 0;
//     questionText.innerHTML = questions[currentQuestion].question;
//     trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
//     trueBtn.onclick = () => {
//         let ano= 0;
//         if (questions[currentQuestion].answers[ano].answer){
//             if(score<20){
//                 score++;
//             }
//         }
//         userScore.innerHTML = score;
//         if(currentQuestion<2){
//             next();
//         }
//     }
//     falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
//     falseBtn.onclick = () => {
//         let ano= 1;
//         if(questions[currentQuestion].answers[ano].answer){
//             if(score<20){
//                 next();
//             }
//         }
//     }    
//     prevBtn.classList.add('hide');
// }

// beginQuiz();

// function restart() {
//     currentQuestion = 0;
//     prevBtn.classList.remove('hide');
//     nextBtn.classList.remove('hide');
//     submitBtn.classList.remove('hide');
//     aBtn.classList.remove('hide');
//     bBtn.classList.remove('hide'); 
//     cBtn.classList.remove('hide');
//     dBtn.classList.remove('hide');
//     score = 0;
//     userScore.innerHTML = score;
//     beginQuiz();
// } 
    
// function next(){
//     currentQuestion++;
//     if(currentQuestion>=2){
//         nextBtn.classList.add('hide');
//         prevBtn.classList.remove('hide');
//     }
//     questionText.innerHTML = questions[currentQuestion].question;
//     trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
//     trueBtn.onclick = () => {
//         let ano= 0;
//         if(questions[currentQuestion].answers[ano].answers){
//             if(score<20){
//                 score++;
//             }
//         }
//         userScore.innerHTML = score;
//         if(currentQuestion<2){
//             next();
//         }
//     }
//     falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
//     falseBtn.onclick = () => {
//         let ano=1;
//         if(questions[currentQuestion].answers[ano].answer){
//             if(score<20){
//                 score++;
//             }
//         }
//         userScore.innerHTML = score;
//         if(currentQuestion<2){
//             next();
//         }
//     }
//     prev.classList.remove('hide');
// }

// function prev(){
//     currentQuestion--;
//     if(currentQuestion<=2){
//         nextBtn.classList.add('hide');
//         prevBtn.classList.remove('hide');
//     }
//     questionText.innerHTML = questions[currentQuestion].question;
//     trueBtn.innerHTML = questions[currentQuestion].answers[0].option;
//     trueBtn.onclick = () => {
//         let ano= 0;
//         if(questions[currentQuestion].answers[ano].answers){
//             if(score<20){
//                 score++;
//             }
//         }
//         userScore.innerHTML = score;
//         if(currentQuestion<2){
//             next();
//         }
//     }
//     falseBtn.innerHTML = questions[currentQuestion].answers[1].option;
//     falseBtn.onclick = () => {
//         let ano=1;
//         if(questions[currentQuestion].answers[ano].answer){
//             if(score<20){
//                 score++;
//             }
//         }
//         userScore.innerHTML = score;
//         if(currentQuestion<2){
//             next();
//         }
//     }
//     next.classList.remove('hide');
// }

// function submit() {
//     prevBtn.classList.add('hide');
//     nextBtn.classList .add('hide');
//     submitBtn.classList.add('hide');
//     trueBtn.classList.add('hide');
//     falseBtn.classList.add('hide');
//     questionText.innerHTML = "Let us see whether or not you shall pass...";
// }
// // Function 'answerQuestion'

//     // Check if the selected answer is correct

//         // IF the answer is wrong

//             // THEN we need to subtract from 'countdown'

//             // Optional: DISPLAY "right" or "wrong"

//         // Display the next question

// // Function 'displayCurrentQuestion'






// // DECLARE 'timer' number
// let totalSeconds = 250;
// let timeRemaining = totalSeconds;
// let secondsElapsed = 0;
// // let currentQuestion = 0;
// let progress = 0;




// var currentQuestion = 0;
// var viewingAns = 0;
// var correctAnswers = 0;
// var quizOver = false;
// var iSelectedAnswer = [];
//     var c = 180;
//     var t;


// $(document).ready(function() {
//     displayCurrentQuestion();
//     $(this).find(".quizMessage").hide();
//     $(this).find(".preButton").attr('disabled', 'disabled');

//     timedCount();

//     $(this).find(".preButton").on("click", function () {
//         if (!quizOver) {
//             if(currentQuestion == 0) {return false;}

//             if(currentQuestion == 1) {
//                 $(".preButton").attr('disabled', 'disabled');
//             }

//             currentQuestion--;
//             if (currentQuestion < questions.length) {
//                 displayCurrentQuestion();
//             }
//         } else {
//             if(viewingAns == 3) {return false; }
//             currentQuestion = 0; viewingAns = 3;
//             viewResults();
//         }
//     });

//     $(this).find(".nextButton").on("click", function () {
//         if (!quizOver) {
//             var val = $("input[type='radio']:checked").val();

//             if (val == undefined) {
//                 $(document).find(".quizMessage").text("Please select an answer");
//                 $(document).find(".quizMessage").show();
//             } else {
//                 $(document).find(".quizMessage").hide();
//                 if (val == question[currentQuestion].correctAnswer) {
//                     correctAnswers++;
//                 }
//                 iSelectedAnswer[currentQuestion] = val;

//                 currentQuestion++;

//                 if(currentQuestion >= 1) {
//                     $('.preButton').prop("disabled", false);
//                 }

//                 if(currentQuestion < questions.length) {
//                     displayCurrentQuestion();
//                 } else {
//                     displayScore();
//                     $('#iTimeShow').html('Quiz Time Completed!');
//                     $('#timer').html("You scored: " + correctAnswers + " out of: " + questions.length);
//                     c = 185;
//                     $(document).find(".preButton").text("View Answer");
//                     $(document).find(".nextButton").text("Play Again?");
//                     quizOver = true;
//                     return false;
//             }
//         }
//     } else {
//         quizOver = false; $('#iTimeShow').html('Time Remaining:');
//         iSelectedAnswer = [];
//         $(document).find(".nextButton").text("Next Question");
//         $(document).find(".preButton").text("Previous Question");
//             $(".preButton").attr('disabled', 'disabled');
//         resetQuiz();
//         viewingAns = 1;
//         displayCurrentQuestion();
//         hideScore();
//     } 
//     });
// });



// function timedCount() {
//     if(c == 185) {
//         return false;
//     }

//     var hours = parseInt ( c / 3600) % 24;
//     var minutes = parseInt( c / 60) % 60;
//     var seconds = c % 60;
//     var result = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
//     $('#timer').html(result);

//     if(c == 0) {
//         displayScore();
//         $('#iTimeShow').html('Quiz Time Completed!');
//         $('#timer').html("You scored: " + correctAnswers + " out of: " + questions.length);
//         c= 185;
//         $(document).find(".preButton").text("View Answer");
//         $(document).find(".nextButton").text("Play Again?");
//         quizOver = true;
//         return false;
//     }

//     c = c - 1;
//     t = setTimeout(function() {
//         timedCount();
//     },1000);
// }

// function displayCurrentQuestion() {
//     if(c == 185) {
//         c = 180; timedCount();
//     }

//     var question = questions[currentQuestion].question;
//     var questionClass = $(document).find(".quizContainer > .question");
//     var choiceList = $(document).find("quizContainer > .choiceList");
//     var numChoices = questions[currentQuestion].choices.length;
//     // Set the questionClass text to the current question
//     $(questionClass).text(question);
//     // Remove all current <li> elements (if any)
//     $(choiceList).find("li").remove();
//     var choice;

//     for (i = 0; i < numChoices; i++)

//     {
//         choice = questions[currentQuestion].choices[i];

//         if(iSelectedAnswer[currentQuestion] == i) {
//             $('<li><input type="radio" class="radio-inline" checked="checked" value=' + i + ' name="dynradio" />' + ' ' + choice + '</li>').appendTo(choiceList);
//         } else {
//             $('<li><input type="radio" class="radio-inline" value=' + i + ' name="dynradio" />' + ' ' + choice + '</li>').appendTo(choiceList);
//         }
//     }
// }

// function resetQuiz() {
//     currentQuestion = 0;
//     correctAnswers = 0;
//     hideScore();
// }

// function displayScore() {
//     $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
//     $(document).find(".quizContainer > .result").show();
// }

// function hideScore() {
//     $(document).find(".result").hide();
// }

// // This displays the current question AND the choices
// function viewResults()
// {
//     if(currentQuestion == 20) { currentQuestion = 0;return false; }
//     if(viewingAns == 1) {return false; }

//     hideScore();
//         var question = questions[currentQuestion].question;
//         var questionClass = $(document).find(".quizContainer > .question");
//         var choiceList = $(document).find(".quizContainer > .choiceList");
//         var numChoices = questions[currentQuestion].choices.length;
//         // Set the questionClass text to the current question
//         $(questionCLass).text(question);
//         // Remove all current <li> elements (if any)
//         $(choiceList).find("li").remove();
//         var choice;

//     for (i = 0; i < numChoices; i++) {

//         choice = questions[currentQuestion] == i

//     if(iSelectedAnswer[currentQuestion] == i) {
//             if(questions[currentQuestion].correctAnswer == i) {
//                 $('<li style="border:2px solid green;margin-top:10px;"><input type="radio" class+"radio-inline" checked="checked"  value=' + i + ' name="dynradio" />' + ' ' + choice + '</li>').appendTo(choiceList);
//             } else {
//                 $('<li style="border: 2px solid red;margin-top:10px;"><input type="radio" class="radio-inline" checked="checked"  value=' + i + ' name="dynradio" />' + ' ' + choice + '</li>').appendTo(choiceList);
//             }
//         } else {
//             if(questions[currentQuestion].correctAnswer == i) {
//                 $('<li style="border:2px solid green;margin-top: 10px;"><input type="radio" class="radio-inline" value=' + i + ' name="dynradio" />' + ' ' + choice = '</li>').appendTo(choiceList);
//             } else {
//                 $('<li><input type="radio" class="radio-inline" value=' + i + ' name="dynradio" />' + ' ' + choice + '</li>').appendTo(choiceList);
//             }
//         }
//         }
//     currentQuestion++;

//     setTimeout(function() {
//         viewResults();
//     },3000);

// }

