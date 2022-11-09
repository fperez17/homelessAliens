const selectionButtons = document.querySelectorAll('[data-selection]')

const finalColumn = document.querySelector('[data-final-column]')

const computerScoreSpan = document.querySelector('[data-computer-score]')

const yourScoreSpan = document.querySelector('[data-your-score]')

const SELECTIONS = [
    {
        name: 'rock', emoji: '✊', beats: 'scissors'
    },
    {
        name: 'paper', emoji: '✋', beats: 'rock'
    },
    {
        name: 'scissors', emoji: '✌️', beats: 'paper'
    }
]

selectionButtons.forEach(selectionButton => {

    selectionButton.addEventListener('click', e => {
        const selectionName = selectionButton.dataset.selection
        //Looping through all the diferent sections (SELECTION)
        //and finding the one that has the exact name as the selection name
        const selection = SELECTIONS.find(selection => selection.name === selectionName)
        makeSelection(selection)
    })
})

function makeSelection(selection){
    const computerSelection = randomSelection()
    const yourWinner = isWinner(selection, computerSelection)
    const computerWinner = isWinner(computerSelection, selection) 
    addSelectionResult(computerSelection, computerWinner)
    addSelectionResult(selection, yourWinner)
    if (yourWinner) incrementScore(yourScoreSpan)
    if (computerWinner) incrementScore(computerScoreSpan)
}

function incrementScore(scoreSpan) {
    scoreSpan.innerText = parseInt(scoreSpan.innerText) + 1
}
  
//Displaying the winner
function addSelectionResult(selection, winner){
    const div = document.createElement('div')
    div.innerText = selection.emoji
    div.classList.add('result-selection')
    if(winner) {
        div.classList.add('winner')
    }
    finalColumn.after(div)
}

//Function for determining the winner
function isWinner(selection, opponentSelection) {
   return selection.beats === opponentSelection.name
}

//Automation of the random selection of the computer
function randomSelection() {

    //Gives us a number between 0 and 2
    const randomIndex = Math.floor(Math.random() * SELECTIONS.lenght)  
    //This will give us a random selection every time we call the randomSelection
    //function
    return SELECTIONS[randomIndex]
}


