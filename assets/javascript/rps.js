var rps = ["r", "p", "s"]

var wins = 0;
var losses = 0;
var ties = 0;

var directionsText = document.getElementById("directions-text");
    
var userChoiceText = document.getElementById("userchoice-text");
    
var computerChoiceText = document.getElementById("computerchoice-text");
    
var winsText = document.getElementById("wins-text");
    
var lossesText = document.getElementById("losses-text");
    
var tiesText = document.getElementById("ties-text");
    

    
document.onkeyup = function(event) {
    var userChoice= event.key;
    var computerChoice= rps[Math.floor(Math.random() * rps.length)];
        
    if ((userChoice === "r" || userChoice === "p" || userChoice === "s")){
        if ((userChoice === "r" && computerChoice === "s") || (userChoice === "s" && computerChoice === "p") || (userChoice === "p" && computerChoice === "r")) {
           wins++;
           alert("You Win!");
        } else if (userChoice === computerChoice) {
            ties++;
            alert("It's a Tie. Play again!");
        } else {
            losses++;
            alert("Sorry, Thanks for playing! Want to try again?");
        }
        userChoiceText.textContent = "My choice: " + userChoice;
        computerChoiceText.textContent = "Computer Choice: " + computerChoice;
        winsText.textContent = "Wins: " + wins;
        lossesText.textContent = "Losses: " + losses;
        tiesText.textContent = "Ties: " + ties;
    } else {
        alert("Please select r, p, or s.");
    }
}    