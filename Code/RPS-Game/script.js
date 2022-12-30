/* Rock-Paper-Scissors */
const selectionButtons = document.querySelectorAll('[data-selection]')
const finalColumn = document.querySelector('[data-final-column]')
const computerScoreSpan = document.querySelector('[data-computer-score]')
const yourScoreSpan = document.querySelector('[data-your-score]')

const CHOOSE = [
  {
    name: 'rock', emoji: '✊', beats: 'scissors'
  },
  {
    name: 'paper', emoji: '✋', beats: 'rock'
  },
  {
    name: 'scissors', emoji: '✌', beats: 'paper'
  }
]

selectionButtons.forEach(selectionButton => {
  selectionButton.addEventListener('click', e => {
    const selectionName = selectionButton.dataset.selection
    //Looping through all the diferent sections (SELECTION)
    //and finding the one that has the exact name as the selection name
    const selection = CHOOSE.find(selection => selection.name === selectionName)
    makeSelection(selection)
  })
})

function makeSelection(selection) {
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
function addSelectionResult(selection, winner) {
  const div = document.createElement('div')
  div.innerText = selection.emoji
  div.classList.add('result-selection')
  if (winner) div.classList.add('winner')
  finalColumn.after(div)
}

//Function for determining the winner
function isWinner(selection, opponentSelection) {
  return selection.beats === opponentSelection.name
}

//Automation of the random selection of the computer
function randomSelection() {
  const randomIndex = Math.floor(Math.random() * CHOOSE.length)//Gives us a number between 0 and 2
  //This will give us a random selection every time we call the randomSelection function
  return CHOOSE[randomIndex]
}


/* Generate Random Image for Alien */
var theImages = new Array();
theImages[0] = '../RPS-Game/../../Assets/Characters/1.jpg';
theImages[1] = '../RPS-Game/../../Assets/Characters/2.jpg';
theImages[2] = '../RPS-Game/../../Assets/Characters/3.jpg';
theImages[3] = '../RPS-Game/../../Assets/Characters/4.jpg';
theImages[4] = '../RPS-Game/../../Assets/Characters/5.jpg';
theImages[5] = '../RPS-Game/../../Assets/Characters/6.jpg';
theImages[6] = '../RPS-Game/../../Assets/Characters/7.jpg';
theImages[7] = '../RPS-Game/../../Assets/Characters/8.jpg';
theImages[8] = '../RPS-Game/../../Assets/Characters/9.jpg';

var p = theImages.length;
var preBuffer = new Array();

for(i = 0; i < p; i++){
  preBuffer[i] = new Image();
  preBuffer[i].src = theImages[i];
}

var whichImage = Math.floor(Math.random()*(theImages.length));

function showImage(){
  document.getElementById("img2").src = theImages[whichImage];
}

showImage();


/* Display Selected Character */
var mainChar = sessionStorage.getItem("whichImages");
var bannerImg = document.getElementById("img");
bannerImg.src = mainChar;



