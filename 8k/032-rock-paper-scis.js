//https://www.codewars.com/kata/5672a98bdbdd995fad00000f/train/javascript
//Rock Paper Scissors!
/* Rock Paper Scissors
Let's play! You have to return which player won! In case of a draw return Draw!.

Examples:

rps('scissors','paper') // Player 1 won!
rps('scissors','rock') // Player 2 won!
rps('paper','paper') // Draw! 
*/
const rps = (p1, p2) => {
  switch (true) {
    case p1 === "scissors" && p2 === "paper":
      return "Player 1 won!";
    case p1 === "scissors" && p2 === "rock":
      return "Player 2 won!";

    case p1 === "paper" && p2 === "rock":
      return "Player 1 won!";
    case p1 === "paper" && p2 === "scissors":
      return "Player 2 won!";

    case p1 === "rock" && p2 === "scissors":
      return "Player 1 won!";
    case p1 === "rock" && p2 === "paper":
      return "Player 2 won!";

    default:
      return "Draw!";
  }
};

/* 
const rps = (p1, p2) => {
    if(p1 === p2) {
      return 'Draw!'
    }; 
    return `Player ${/rockscissors|scissorspaper|paperrock/.test(p1+p2)? 1 : 2} won!`;
  }
  There are three possibilities: Draw, P1 wins, P2 wins.
The draw is simple. If both are equal it's a draw.

What are the cases where P1 wins? When he choses rock and P2 choses scissors. Or he choses scissors and P2 choses paper. Or he choses paper and P2 choses Rock.

/rockscissors|scissorspaper|paperrock/ is a regex. It returns true if the string is either "rockscissors", "scissorspaper" or "paperrock".

So, it will return true if P1 wins. If it is false, then only remaining choice is that P2 has won. */
