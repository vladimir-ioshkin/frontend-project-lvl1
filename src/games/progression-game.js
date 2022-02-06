import readlineSync from 'readline-sync';
import startGame from '../index.js';

const MIN_NUMBER = 1;
const MAX_NUMBER = 20;
const MAX_INDEX = 9;

const getQuestion = () => {
  const start = Math.floor(Math.random() * MAX_NUMBER);
  const progStep = Math.floor(Math.random() * (MAX_NUMBER - MIN_NUMBER) + MIN_NUMBER);
  const hiddenNumber = Math.floor(Math.random() * MAX_INDEX);

  const arr = [start];

  for (let i = 1; i <= MAX_INDEX; i += 1) {
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
