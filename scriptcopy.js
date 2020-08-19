//import {questions} from './questions';
//<meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
//const restartButton = document.getElementById('restart-btn')
const learnContainerElement = document.getElementById('learn-container')
const learnElement = document.getElementById('learn')
const answerButtonsElement = document.getElementById('answer-buttons')
const image = document.getElementById('image')

let shuffledQuestions, currentQuestionIndex

let unclicked;

startButton.addEventListener('click', startGame)
nextButton.addEventListener('click', nextQuestion)
//restartButton.addEventListener('click', startGame)

function nextQuestion() {
        currentQuestionIndex++
        setNextQuestion()
        //unclicked = true;
}

function startGame() {
    console.log('Started')
    startButton.classList.add('hide')
    nextButton.classList.remove('hide')
    shuffledQuestions = learnQuestions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    learnContainerElement.classList.remove('hide')
    setNextQuestion()
    counter = 0;
}

function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
}

let counter;

function showQuestion(question) {
    learnElement.innerText = question.question
    
    // adding image to show question
    image.src = question.image

    question.answers.forEach(answer => {
        const button = document.createElement('button')
        button.innerText = answer.text
        button.classList.add('btn')
        if(answer.correct) {
            button.dataset.correct = answer.correct;
            
        }
        unclicked = true
        if(unclicked) {
            button.addEventListener('click', selectAnswer)
        }
        answerButtonsElement.appendChild(button)
    })
}



function resetState() {
    clearStatusClass(document.body)
    ///nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
}

function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    
    //console.log(unclicked)
    if (correct && unclicked) {
        counter++;
        console.log(counter);
        showScore.innerHTML = "Score: " + counter + " out of 54"
        //console.log(unclicked)
    }
    unclicked = false;
    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if(shuffledQuestions.length > currentQuestionIndex+1) {
        nextButton.classList.remove('hide')
    } else {
        
        if((counter*100/numberOfQuestions)< 50) {
            finalScore.innerHTML = "Your final score is " + counter + " out of " + numberOfQuestions + ". You have failed"; 
        } else {
            finalScore.innerHTML = "Your final score is " + counter + " out of " + numberOfQuestions + ". You have passed";
        }
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
}

function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct){
        element.classList.add('correct')
    } else  {
        element.classList.add('wrong')
    }
}

function clearStatusClass(element){
    element.classList.remove('correct')
    element.classList.remove('wrong')
}




//const questions = document.getElementById('questions')