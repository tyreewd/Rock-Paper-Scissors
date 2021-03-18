        let whatHappened = document.querySelector("#whatHappened");
        let finalScore = document.querySelector("#finalScore");
        let finalFinalScore = document.querySelector("#finalFinalScore");
        
        let playerScore = document.querySelector('#playerScore');
        let computerScore = document.querySelector('#computerScore');

        const rockPaperScissors = document.querySelectorAll("img");       
        const rock = document.getElementById('rock');
        const paper = document.getElementById('paper');
        const scissors = document.getElementById('scissors');
        rockPaperScissors.forEach(item => item.addEventListener('click', playRound));
        
        function playRound(event) {
            finalFinalScore.textContent = "";
            finalScore.textContent = "";

            if (event.target == rock) {
                 playRoundRock();
            } else if (event.target == paper) {
                 playRoundPaper();
            } else if (event.target == scissors) {
                 playRoundScissors();
            } 

            if (playerScore.textContent == 5) {
                finalScore.textContent = `You are victorious!`;
                finalFinalScore.textContent = ` Final Score: ${playerScore.textContent}` + 
                " vs " + `${computerScore.textContent}`;
                playerScore.textContent = 0;
                computerScore.textContent = 0;
                return;
            } else if (computerScore.textContent == 5) {
                finalScore.textContent = `You are fail!`;
                finalFinalScore.textContent = ` Final Score: ${playerScore.textContent}` + 
                " vs " + `${computerScore.textContent}`;
                playerScore.textContent = 0;
                computerScore.textContent = 0;
                return;
            }


        }
        function playRoundRock() {
            if (computerPlay() == 'rock') {
                whatHappened.textContent = ("Tied Round. No points.");
            } else if (computerPlay() == 'paper') {
                computerScore.textContent++;
               
                whatHappened.textContent =("Paper beats rock. You Lose.");
            } else {
                playerScore.textContent++;
                whatHappened.textContent =("Rock beats scissors. You win!");
            }
        }

        function playRoundPaper() {
            if (computerPlay() == 'rock') {
                playerScore.textContent++;
                whatHappened.textContent = ("Paper beats rock. You win!");
            } else if (computerPlay() == 'paper') {
                whatHappened.textContent = ("Paper ties paper. You tie.");
            } else {
                computerScore.textContent++;
                whatHappened.textContent = ("Scissors beats paper. You lose.");
            }
        }

        function playRoundScissors() {
            if (computerPlay() == 'rock') {
                computerScore.textContent++;
                whatHappened.textContent = ("Rock beats scissors. You lose.");
            } else if (computerPlay() == 'paper') {
                playerScore.textContent++;
                whatHappened.textContent = ("Scissors beat paper. You win!");
            } else {
                whatHappened.textContent = ("Scissors ties scissors. You tie.");
            }
        }


        function computerPlay() {
            let rockOrPaperOrScissors = Math.random();
            if (rockOrPaperOrScissors >= 0 && rockOrPaperOrScissors < 0.34) {
                return "rock";
            } else if (rockOrPaperOrScissors >= 0.34 && rockOrPaperOrScissors < 0.67) {
                return "paper";
            } else {
                return "scissors";
            }
        }

           