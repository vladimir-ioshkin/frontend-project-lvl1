import readlineSync from 'readline-sync';
import startGame from '../index.js';

const getQuestion = () => {
  const start = Math.floor(Math.random() * 20);
  const progStep = Math.floor(Math.random() * (10 - 1) + 1);
  const hiddenNumber = Math.floor(Math.random() * 9);

  const arr = [start];

  for (let i = 1; i < 10; i += 1) {
    arr[i] = arr[i - 1] + progStep;
  }

  const result = arr[hiddenNumber];

  arr[hiddenNumber] = '..';

  const questionStr = arr.join(' ');

  console.log(`Question: ${questionStr}`);

  const answer = readlineSync.question('Your answer: ');
  if (result === Number(answer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
  return false;
};

const startProgressionGame = () => {
  startGame(getQuestion, 'What number is missing in the progression?');
};

export default startProgressionGame;
