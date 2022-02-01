import readlineSync from 'readline-sync';

const startGame = (getQuestion, task) => {
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);

  console.log(task);
  for (let i = 0; i < 3; i += 1) {
    if (getQuestion() === false) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startGame;
