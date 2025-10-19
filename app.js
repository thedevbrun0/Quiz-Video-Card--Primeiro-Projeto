
const form = document.querySelector('.form')
const scoreIndex = document.querySelector('.score')
const container1= document.querySelector('.container-question1')
const container2 = document.querySelector('.container-question2')
const container3 = document.querySelector('.container-question3')
const resetButton = document.querySelector('.reset')
const submitButton = document.querySelector('.submit')

const answersCorrect = ['A', 'C', 'A']
let score = 0
let textScore = ''
let answersRespost = []

const disableButton = () => submitButton.disabled = true;
const enableButton = () => submitButton.disabled = false;

addUserAnswers = () => {
    answersCorrect.forEach((_, index) => {
        answersRespost.push(form[`answer${index + 1}`].value)
        testUserAnswers(index)
    })
}

const testUserAnswers = index => {

    if (answersRespost[index] === answersCorrect[index]) {
        score++
        
}}

const messageScore = () => {
    switch (score) {
        case 0:
            textScore = 'Você não acertou nenhuma pergunta =('
            break;
        case 1:
            textScore = 'Você acertou 1 pergunta.'
            break;
        case 2:
            textScore = 'Você acertou 2 perguntas.'
            break;
        case 3:
            textScore = 'Você acertou 3 perguntas.'
            break;

        default:


    }
}
const toTopPage = () => {
    scrollTo({
        top: 0,
        left: 0,
        behavior: "smooth"
    })
}


const resetForm = () => {
    score = 0
    scoreIndex.classList.add('d-none')
    toTopPage()
    enableButton()
    answersRespost = []
    container1.style.background = 'gainsboro'
    container2.style.background = 'gainsboro'
    container3.style.background = 'gainsboro'
   
}

const message = () => {

    answersRespost.forEach((value, index) => {
    

        if (form.answer1.value === 'A') {
            container1.style.background = 'lightgreen';
        } else {
            container1.style.background = 'indianred';
        }

        if (form.answer2.value === 'C') {
            container2.style.background = 'lightgreen';
        } else {
            container2.style.background = 'indianred';
        }

        if (form.answer3.value === 'A') {
            container3.style.background = 'lightgreen';
        } else {
            container3.style.background = 'indianred';
        }

        if (value === '') {
            score = ''
            textScore = 'Selecione todas as respostas!'
            container1.style.background = 'gainsboro'
            container2.style.background = 'gainsboro'
            container3.style.background = 'gainsboro'
        }
    })

    messageScore(score)
    scoreIndex.querySelector('h2').textContent = textScore
    scoreIndex.classList.remove('d-none')
    toTopPage()
}






form.addEventListener('submit', event => {


    addUserAnswers()
    event.preventDefault()
    message()
    disableButton()


})

resetButton.addEventListener('click', resetForm)
