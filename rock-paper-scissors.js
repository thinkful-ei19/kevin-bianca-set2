function rockPaperScissors(choice) {
    let player = 'choose rock, paper or scissors';
    if (choice === 'rock') {
        player = 1;
    } else if (choice === 'paper') {
        player = 2;
    } else if (choice === 'scissors') {
        player = 3;
    }

    const randomNo = Math.floor(Math.random() * 3) + 1;

    if ((randomNo === 1 && player === 1) || (randomNo === 2 && player === 2) || (randomNo === 3 && player === 3)) {
        console.log('It\'s a tie!');
    } else if ((randomNo === 1 && player === 2) || (randomNo === 2 && player === 3) || (randomNo === 3 && player === 1)) {
        console.log('You win!');
    } else if ((randomNo === 1 && player === 3) || (randomNo === 3 && player === 2) || (randomNo === 2 && player === 1)) {
        console.log('Computer wins!');
    } else {
        throw new Error ('there\'s an error');
    }
}

rockPaperScissors('dude');