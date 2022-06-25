// DECLARE 'timer' number

// DECLARE 'questions' array
var questions = [
    {
        // questions
        // answers
        // correct answer
    },
    {
        // questions
        // answers
        // correct answer
    },
    {
        // questions
        // answers
        // correct answer
    },
    // and so on...
];

// DECLARE the 'timeEl'
var timeEl = document.getElementById('timer');
// OR document.querySelector('#timer'); would work || querySelectorAll grabs ALL elements with id tag.

// Function 'startGame'

    // Hide the start screen

    // Display the first question

    // Set the starting value of 'countdown'

    // Start the timer 'startTimer'

// Function 'answerQuestion'

    // Check if the selected answer is correct

        // IF the answer is wrong

            // THEN we need to subtract from 'countdown'

            // Optional: DISPLAY "right" or "wrong"

        // Display the next question

// Function 'displayCurrentQuestion'






// DECLARE 'timer' number

// DECLARE 'questions' array

var questions = [{
    question: "1: What is the name of the fictional setting in which The Lord of the Rings takes place?",
    choices: ["Narnia", "Middle Earth", "Hogwarts", "Westeros"],
        correctAnswer: 1
}, {
    question: "2: Who is entrusted with the quest to destroy The One Ring?",
    choices: ["A Witcher, Geralt of Rivia", "A member of the Tribunal, Vivec of Morrowind", "A Hobbit, Frodo Baggins of the Shire", "The Human Ranger, Minsc of Rasheman alongside his trusty hamster, Boo"],
        correctAnswer: 2
}, {
    question: "3: How many rings of power were made for the Elves, Dwarves, and Men?",
    choices: ["Three for the Elves, Seven for Dwarves, and Nine for Men", "Six for the ELves, Six for the Dwarves, and Six for Men", "Trick Question. No Rings were made other than The ONE Ring", "One thousand for the army of Elven Warriors, Nineteen-Thousand for the Dwarven Warlords under The Misty Mountain, and the Race of Men were given nothing"],
        correctAnswer: 0
}, {
    question: "4: What is the name of the mountain where the Master Ring was made?",
    choices: ["Mount Devious", "Mount Dreary", "Mount Death", "Mount Doom"],
        correctAnswer: 3
}, {
    question: "5: What was the name of Sauron's Fortress in Mordor?",
    choices: ["Minas Morgul", "Barad-dûr", "Orthanc", "Cirith Ungol"],
        correctAnswer: 1
}, {
    question: "6: What is the name of the bridge that Gandalf destroys in the battle with the Balrog of Moria?",
    choices: ["The Morgul Bridge", "Tharbad", "The Bridge of Khazad-dûm", "The Brandywine Bridge"],
        correctAnswer: 2
}, {
    question: "7: Who owned the Ring of Power until Bilbo Baggins picked it up in the cave?",
    choices: ["The Witch-King of Angmar", "Gollum/Sméagol", "The Mouth of Sauron", "Boromir of Gondor"],
        correctAnswer: 1
}, {
    question: "8: What was the name of the demonic spider that lived in the caves of Cirith Ungol?",
    choices: ["Shelob", "Aragog", "Lolth", "Chaos Witch Quelaag"],
        correctAnswer: 0
}, {
    question: "9: In 'The Lord of the Rings: The Return of the King', which army does Aragorn summon using the Sword of Elendil?",
    choices: ["The Rohirrim", "The Night's Watch", "The Army of Darkness", "The Army of the Dead"],
        correctAnswer: 3
}, {
    question: "10: What does Gollum call the Ring of Power?",
    choices: ["My Precious", "My Treasure", "My Only Friendses", "Sally"],
        correctAnswer: 0
}, {
    question: "11: What group composed the Fellowship of the Ring?",
    choices: ["Geralt of Rivia, Dandelion the bard, the sorceresses Triss Merigold and Yennefer of Vengerberg, and the dwarf Zoltan Chivay", "Knight Lautrec of Carim, Andre and Solaire of Astora, Siegmeyer of Catarina, and Patches the Hyena", "Frodo Baggins of the Shire, Samwise Gamgee, Meridoc Brandybuck, Peregrin Took, the ranger Aragorn, Boromir of Gondor, Legolas of the Woodland Realm, the dwarf Gimli, and Gandalf the Grey", "Jon Snow of Winterfell, Tyrion Lannister, Gregor and Sandor 'The Hound' Clegane, Daenerys Targaryen, and Lord Eddard Stark"],
        correctAnswer: 2 
}, {
    question: "12: What is the name of the reforged version of the 'sword that was broken'?",
    choices: ["Sting, the Spider's Bane", "Glamdring, the Foe-Hammer", "Andúril, the Flame of the West", "Orcrist, the Goblin-Cleaver"],
        correctAnswer: 2
}, {
    question: "13: What does Aragorn say right before charging into the last battle in Mordor?",
    choices: ["'DEATH!'", "'For Frodo!'", "'I'll kill everyone one of you damned dirty orcs!'", "'Elendil!'"],
        correctAnswer: 1
}, {
    question: "14: Who is Isildur's heir, also heir to the throne of Gondor, and known as 'Strider' and 'Dunadan'?",
    choices: ["Boromir of Gondor", "Aragorn, son of Arathorn", "Samwise Gamgee, Fordo's gardener", "The Reader. We were the hero all along."],
        correctAnswer: 1
}, {
    question: "15: What are potatoes, and what are they good for?",
    choices: ["Absolutely nothing", "A root vegetable, they have plenty of uses", "'PO-TA-TOES? Boil 'em, mash 'em, stick 'em in a stew. Lovely big golden chips with a nice piece of fried fish.", "A tuber, generally cooked until soft and prepared as a side dish"],
        correctAnswer: 2
}, {
    question: "16: Which is NOT one of Gandalf's many nicknames?",
    choices: ["The Grey Pilgrim", "Gandalf Greyhame", "Gandalf Stormcrow", "Flame of Udun"],
        correctAnswer: 3
}, {
    question: "17: What does the Elvish word 'Mellon' mean?",
    choices: ["Friend", "Watermelon", "King of the Woodland Realm", "A measurement of distance, '...as the crow flies'"],
        correctAnswer: 0 
}, {
    question: "18: What unusual property does Frodo notice about the Ring?",
    choices: ["It makes his ring finger swell up", "It grows heavier", "He can see long distances when peering through it", "It gives him super-Hobbit strength"],
        correctAnswer: 1
}, {
    question: "19: Where are they taking the Hobbits?",
    choices: ["Fangorn Forest", "The Lands Between", "Isengard", "Rohan"],
        correctAnswer: 2
}, {
    question: "20: What do the Uruk-Hai of Isengard bear upon their helms?",
    choices: ["The White Hand of Saruman", "A Flaming Ring on a Black Crest", "The White Tree of Gondor", "The Leaves of Lothlorien"]
        correctAnswer: 0
}];

var currentQuestion = 0;
var viewingAns = 0;
var correctAnswers = 0;
var quizOver = false;
var iSelectedAnswer = [];
    var c = 180;
    var t;


$(document).ready(function() {
    displayCurrentQuestion();
    $(this).find(".quizMessage").hide();
    $(this).find(".preButton").attr('disabled', 'disabled');

    timedCount();

    $(this).find(".preButton").on("click", function () {
        if (!quizOver) {
            if(currentQuestion == 0) {return false;}

            if(currentQuestion == 1) {
                $(".preButton").attr('disabled', 'disabled');
            }

            currentQuestion--;
            if (currentQuestion < questions.length) {
                displayCurrentQuestion();
            }
        } else {
            if(viewingAns == 3) {return false; }
            currentQuestion = 0; viewingAns = 3;
            viewResults();
        }
    });

    $(this).find(".nextButton").on("click", function () {
        if (!quizOver) {
            var val = $("input[type='radio']:checked").val();

            if (val == undefined) {
                $(document).find(".quizMessage").text("Please select an answer");
                $(document).find(".quizMessage").show();
            } else {
                $(document).find(".quizMessage").hide();
                if (val == question[currentQuestion].correctAnswer) {
                    correctAnswers++;
                }
                iSelectedAnswer[currentQuestion] = val;

                currentQuestion++;

                if(currentQuestion >= 1) {
                    $('.preButton').prop("disabled", false);
                }

                if(currentQuestion < questions.length) {
                    displayCurrentQuestion();
                } else {
                    displayScore();
                    $('#iTimeShow').html('Quiz Time Completed!');
                    $('#timer').html("You scored: " + correctAnswers + " out of: " + questions.length);
                    c = 185;
                    $(document).find(".preButton").text("View Answer");
                    $(document).find(".nextButton").text("Play Again?");
                    quizOver = true;
                    return false;
            }
        }
    } else {
        quizOver = false; $('#iTimeShow').html('Time Remaining:');
        iSelectedAnswer = [];
        $(document).find(".nextButton").text("Next Question");
        $(document).find(".preButton").text("Previous Question");
            $(".preButton").attr('disabled', 'disabled');
        resetQuiz();
        viewingAns = 1;
        displayCurrentQuestion();
        hideScore();
    } 
    });
});



function timedCount() {
    if(c == 185) {
        return false;
    }

    var hours = parseInt ( c / 3600) % 24;
    var minutes = parseInt( c / 60) % 60;
    var seconds = c % 60;
    var result = (hours < 10 ? "0" + hours : hours) + ":" + (minutes < 10 ? "0" + minutes : minutes) + ":" + (seconds < 10 ? "0" + seconds : seconds);
    $('#timer').html(result);

    if(c == 0) {
        displayScore();
        $('#iTimeShow').html('Quiz Time Completed!');
        $('#timer')html("You scored: " + correctAnswers + " out of: " + questions.length);
        c= 185;
        $(document).find(".preButton").text("View Answer");
        $(document).find(".nextButton").text("Play Again?");
        quizOver = true;
        return false;
    }

    c = c - 1;
    t = setTimeout(function() {
        timedCount();
    },1000);
}

function displayCurrentQuestion() {
    if(c == 185) {
        c = 180; timedCount();
    }

    var question = questions[currentQuestion].question;
    var questionClass = $(document).find(".quizContainer > .question");
    var choiceList = $(document).find("quizContainer > .choiceList");
    var numChoices = questions[currentQuestion].choices.length;
    // Set the questionClass text to the current question
    $(questionClass).text(question);
    // Remove all current <li> elements (if any)
    $(choiceList).find("li").remove();
    var choice;

    for (i = 0; i < numChoices; i++)

    {
        choice = questions[currentQuestion].choices[i];

        if(iSelectedAnswer[currentQuestion] == i) {
            $('<li><input type="radio" class="radio-inline" checked="checked" value=' + i + ' name="dynradio" />' + ' ' + choice + '</li>').appendTo(choiceList);
        } else {
            $('<li><input type="radio" class="radio-inline" value=' + i + ' name="dynradio" />' + ' ' + choice + '</li>').appendTo(choiceList);
        }
    }
}

function resetQuiz() {
    currentQuestion = 0;
    correctAnswers = 0;
    hideScore();
}

function displayScore() {
    $(document).find(".quizContainer > .result").text("You scored: " + correctAnswers + " out of: " + questions.length);
    $(document).find(".quizContainer > .result").show();
}

function hideScore() {
    $(document).find(".result").hide();
}

// This displays the current question AND the choices
function viewResults()
{
    if(currentQuestion == 20) { currentQuestion = 0;return false; }
    if(viewingAns == 1) {return false; }

    hideScore();
        var question = questions[currentQuestion].question;
        var questionClass = $(document).find(".quizContainer > .question");
        var choiceList = $(document).find(".quizContainer > .choiceList");
        var numChoices = questions[currentQuestion].choices.length;
        // Set the questionClass text to the current question
        $(questionCLass).text(question);
        // Remove all current <li> elements (if any)
        $(choiceList).find("li").remove();
        var choice;

    for (i = 0; i < numChoices; i++) {

        choice = questions[currentQuestion] == i

    if(iSelectedAnswer[currentQuestion] == i) {
            if(questions[currentQuestion].correctAnswer == i) {
                $('<li style="border:2px solid green;margin-top:10px;"><input type="radio" class+"radio-inline" checked="checked"  value=' + i + ' name="dynradio" />' + ' ' + choice + '</li>').appendTo(choiceList);
            } else {
                $('<li style="border: 2px solid red;margin-top:10px;"><input type="radio" class="radio-inline" checked="checked"  value=' + i + ' name="dynradio" />' + ' ' + choice + '</li>').appendTo(choiceList);
            }
        } else {
            if(questions[currentQuestion].correctAnswer == i) {
                $('<li style="border:2px solid green;margin-top: 10px;"><input type="radio" class="radio-inline" value=' + i + ' name="dynradio" />' + ' ' + choice = '</li>').appendTo(choiceList);
            } else {
                $('<li><input type="radio" class="radio-inline" value=' + i + ' name="dynradio" />' + ' ' + choice + '</li>').appendTo(choiceList);
            }
        }
        }
    currentQuestion++;

    setTimeout(function() {
        viewResults();
    },3000);

}
