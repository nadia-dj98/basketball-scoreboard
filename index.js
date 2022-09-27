let homePoints = 0
let homeScoreEl = document.getElementById("homeScore")
let guestPoints = 0
let guestScoreEl = document.getElementById("guestScore")
let beginGame = 0

//Home functions
function plusOneHome() {
    homePoints += 1
    homeScoreEl.textContent = homePoints       
}

function plusTwoHome() {
    homePoints += 2
    homeScoreEl.textContent = homePoints     
}

function plusThreeHome() {
    homePoints += 3
    homeScoreEl.textContent = homePoints     
}

// Guest functions
function plusOneGuest() {
    guestPoints += 1
    guestScoreEl.textContent = guestPoints  

}

function plusTwoGuest() {
    guestPoints += 2
    guestScoreEl.textContent = guestPoints  

}

function plusThreeGuest() {
    guestPoints += 3
    guestScoreEl.textContent = guestPoints  

}

//New Game

function newGame() {
    homeScoreEl.textContent = 0 
    guestScoreEl.textContent = 0
    homePoints = 0
    guestPoints = 0
    
}