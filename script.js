let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const randomIndex = Math.floor(Math.random() * 3);
    return choices[randomIndex];
}

function playRound(humanChoice) {
    const computerChoice = getComputerChoice();
    const result = document.getElementById('result');
    
    // Display choices
    let message = `You chose ${humanChoice}, Computer chose ${computerChoice}. `;
    
    // Determine winner
    if (humanChoice === computerChoice) {
        message += "It's a tie!";
    } else if (
        (humanChoice === 'rock' && computerChoice === 'scissors') ||
        (humanChoice === 'paper' && computerChoice === 'rock') ||
        (humanChoice === 'scissors' && computerChoice === 'paper')
    ) {
        message += "You win! 🎉";
        humanScore++;
    } else {
        message += "You lose! 😞";
        computerScore++;
    }
    
    // Update display
    result.textContent = message;
    document.getElementById('humanScore').textContent = humanScore;
    document.getElementById('computerScore').textContent = computerScore;
}