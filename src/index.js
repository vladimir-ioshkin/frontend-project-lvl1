import readlineSync from 'readline-sync';

const roundCounter = 3;

const startGame = (getQuestion, task) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);
  console.log(task);

  for (let i = 0; i < roundCounter; i += 1) {
    const { result, question } = getQuestion();

    console.log(`Question: ${question}`);
    const answer = readlineSync.question('Your answer: ');

    if (result !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
