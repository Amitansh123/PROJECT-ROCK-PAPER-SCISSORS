//FUNCTION TO GENERATE RANDOM INPUTS OF "ROCK" "PAPER" "SCISSOR" FOR COMPUTER
function computerPlay()
{
    const arr = ["rock","paper","scissor"];
    let ran = Math.floor(Math.random()*3);
    return arr[ran];
}
//FUNCTION TO DECIDE THE WINNER OR LOSER OF THE ROUND AND RETURN ASSOCIATED VALUE
function playRound(playerSelection,computerSelection)
{
if(playerSelection == computerSelection)
return ;
else if ( playerSelection == "rock" && computerSelection == "scissor" || playerSelection == "paper" && computerSelection == "rock" || playerSelection == "scissor" && computerSelection == "paper")
return 1;
else
return 2;
}
//FUNCTION TO DETERMINE THE NUMBER OF ROUNDS AND THEIR RESULTS
function game()
{
    let i = 0,result = 0,win = 0,lose = 0;
    while(i<5)
    {
        const playerSelection=prompt("Enter your Choice");
        const computerSelection=computerPlay();
        console.log("YOUR CHOICE : " + playerSelection);
        console.log("COMPUTER's CHOICE : " + computerSelection);
        result = playRound(playerSelection.toLowerCase(),computerSelection);
        if(result == 1)
        {
        win++;
        console.log("YOU WIN");
        }
        else if (result == 2)
        {
            lose++;
            console.log("YOU LOSE");
        }
        else
        {
        console.log("TIE");
        }

     i++;
    }
    check (win,lose)
}
//FUNCTION TO CHECK THE WINNER AFTER COMPLETION OF ALL THE ROUNDS
function check(win,lose)
{
    if(win>lose)
    console.log("RESULT = YOU'VE WON THE GAME  " + "YOUR WIN:" + win + "  COMPUTER'S WIN:" + lose);
    else if (lose>win)
    console.log("RESULT = COMPUTER WON THE GAME  " + "COMPUTER'S WIN:" + lose + "  YOUR WIN:" + win );
    else
    console.log("RESULT = IT'S A TIE BETWEEN YOU AND COMPUTER  " + "YOUR WIN:" + win + "  COMPUTER'S WIN:" + lose);
}
//FUNCTION CALL TO START THE GAME
game();


