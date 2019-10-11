
const STORE = [
    /*
    {
        //1
        question: 'Which of these terms means to cook food in its own juices with a small amount of fat over low heat, just until softened?',
        answers: [
            'Sweating',
            'Simmering',
            'Stewing',
            'Sautéing',
        ],
        correctAnswer:
            'Sweating',

    },
    {
        //2
        question:
            'What is the difference between a convection oven and a conventional oven?',
        answers: [
            'A convection oven uses a fan',
            'A convection oven lacks the broiler setting',
            'A convection oven uses radioactivity',
        ],
        correctAnswer:
            'What is the difference between a convection oven and a conventional oven?',
    
    },
    {
        //3
        question: 'When it comes to Italian pasta and sauces',
        answers: [
            'Long pastas are best with cream sauces or olive oil',
            'The redder the sauce, the longer the pasta should be',
            'It’s all good!',
            'Whole grain pasta is best with red sauce',
        ],
        correctAnswer:
            'Long pastas are best with cream sauces or olive oil',

    },
    {
        //4
        question: 'What should you look for when buying fresh mussels?',
        answers: [
            'Mussels with closed shells or shells that snap shut when tapped',
            'Mussels with widely opened shells',
            'Mussels that are light-colored',
            'Mussels with a while film around the lip of the shell',
        ],
        correctAnswer:
            'Mussels with closed shells or shells that snap shut when tapped',

    },
    {
        //5
        question: 'Which type of wood should you NOT use for smoking foods on an outdoor grill?',
        answers: [
            'Softwoods',
            'Hardwoods',
            'Fruitwoods',
            'Hardwood Chips',
        ],
        correctAnswer:
            'Softwoods',

    },
    {
        //6
        question: 'Which of these is an 18th-century word for flattening chicken for quick cooking?',
        answers: [
            'Spatchcock',
            'Anvil',
            'Poundeyre',
            'Palacing',
        ],
        correctAnswer:
            'Spatchcock',
    },
    {
        //7
        question: 'What is a quick fix if your rice is too wet?',
        answers: [
            'Uncover the pot',
            'Turn up the heat',
            'Stir the Rice',
            'Add flour',
        ],
        correctAnswer: 
            'Uncover the pot',

    },
    {
        //8
        question: 'A basic pesto sauce consists of basil, Parmesan, olive oil, salt and',
        answers: [
            'Pine nuts',
            'Pepper',
            'Tomato Paste',

        ],
        correctAnswer:
            'Pine nuts',
        
    },
    {
        //9
        question: 'When a recipe calls for wine, most cooks avoid using cooking wines because they contain what?',
        answers: [
            'Salt',
            'Too much alcohol',
            'Fat',

        ],
        correctAnswer:
            'Salt',
    },
    */
    {
        //10
        question: 'Which of the following should you avoid marinating overnight?',
        answers: [
            'Fish',
            'Pork',
            'Chicken', 

        ],
        correctAnswer:
            'Fish',
    },

];


let question = 0;
let score = 0;


console.log('hello');




/*

//create a variable to keep track of quiz score and current question


// create template that generates new questions and hides old questions



//make score trackerupdate +1 if the correct answer was selected

//Show question number, and have it update after each qustion is answered.
//does not need to be the correct answer (submit button just needs to be pressed)
*/



//non functioning submit form START / Compare Correct Answer
function submitForm() {
$('form').on('submit', (event) => { event.preventDefault();
    
    //$('.altBox').hide();
    //$('.response').show();
    let selected = $('input[type="radio"]:checked').attr('value'); //fixme
    //let answer = selected.val(); //possibly replacable
    console.log(selected);

    let correct = STORE[question].correctAnswer;

    if (selected === correct) {
        console.log("if");
        correctAnswer();
    } else {
        console.log("else");
        incorrectAnswer();
    };
    console.log('working');
});
handleNext();
};
//get js-choices


    function correctAnswer(){
   
        console.log('Chef');
        $('.js-form').addClass('hidden');
        score++;
        $('#myScore').text(score);
        $('.alt-page-correct').removeClass('hidden');
        //$('.altBox').show();
        $('.alt-page-correct').html(`<img src="happyToast.jpg" alt="happy toast" class="images" width="300">
        <p>You Got It! Keep Cooking!!</p> 
        <button type=button class="nextButton">Next</button></div>`);
    };


    function incorrectAnswer(){
       
        console.log('Wrong');
        $('.js-form').addClass('hidden');
        score;
        $('#myScore').text(score);
        $('.alt-page-incorrect').removeClass('hidden');
        $('.alt-page-incorrect').html(`<img src="sadToast.jpg" alt="sad toast" class ="images" width="300">
        <p>Foods Burning...<span>The correct answer is "${STORE[question].correctAnswer}"</span></p>
        <button type=button class="nextButton button">Next</button></div>`);
    };


       // handle event listener, onclick for next button
    //must recognize parent tag
    //event deligation (KEY WORD GOOGLE)
    //new info to show must be the next question
    //question++


    //console.log function in 220 (quiz over ran) //////////////
    function quizOver(){
        console.log(STORE.length);
        $('.altBox').addClass('hidden');
        $('.js-form').addClass('hidden');
        $('.js-final').removeClass('hidden');
    };
    
    //on click
    //return to .frontPage


    function restartQuiz(){  
        console.log('show restart')  
        $('.frontPage').html(`
        <span class="quizEnd">You've completed the quiz!</span>
        <span class="quizScored">Your score was ${score}/10</span>
        <button type="button" id="restart">Restart?</button>`
        )
        console.log('show restart');
    };

    function quizRestart(){
        $('.frontPage').on('click','#restart',function(event){
           startQuiz();
           console.log('quiz restart');
        })
    };
  
//diplay q and display new Q number, anwers, and new submit
    function handleNext(){
        $('.altBox').on('click', '.nextButton', function(event){
            console.log(STORE.length, question);
            if (question == STORE.length-1){
                quizOver();
            } else {
            question++;
            $('#questionNum').text(question+1)
            console.log('nextQ');
            $('.altBox').addClass('hidden');
            displayQuestion(question);
            
            };
        });
    };
   

function generateChoices(qNum,index){ //id="answer-${index}" index not qNum
    return `<div class="radio-item">
    <input type="radio" name="answers" id="answer-${index}" value="${STORE[qNum].answers[index]}">
    <label for="answer-${index}"><span>${STORE[qNum].answers[index]}</span></label>
    </div>`
};

function displayChoices(qNum){
    let answers = STORE[qNum].answers;
    let choices = [];
    for (let i=0; i< answers.length; i++){

        choices.push(generateChoices(qNum, i));
    }
    console.log(choices);
    $('.js-choices').html(choices.join(''));
};

function displayQuestion(qNum){
    $('.js-form').removeClass('hidden');
    console.log(qNum);
    $('#question').text(STORE[qNum].question);
    displayChoices(qNum);
    $('.frontPageUl').removeClass('hidden');
};


//check answer to see if correct

function checkAnswers (qNum, index){
    $('')
};



function handleStart(){
    $('.startButton').on('click', function(){
        console.log('hello');
        $('form').removeClass('hidden');
        $('.startButton').addClass('hidden');
        //displ question function Displ()
        displayQuestion(0);
        //displ answr
        submitForm();
       
    });
};

//show start of quiz
//load images and descrip


$(handleStart);




// Display at 0 to restart
// check to make sure you have all reqs
    //access
    //UI & UX
// Clean up
