import readlineSync from 'readline-sync';
import getIsEven from '../helpers/get-is-even.js';
import startGame from '../index.js';

const MAX_NUMBER = 100;

const getQuestion = () => {
  const number = Math.floor(Math.random() * MAX_NUMBER);
  console.log(`Question: ${number}`);
  const isEven = getIsEven(number);
  const answer = readlineSync.question('Your answer: ');
  if ((isEven && answer === 'yes') || (!isEven && answer === 'no')) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven ? 'yes' : 'no'}'.`);
  return false;
};

const startEvenGame = () => {
  startGame(getQuestion, 'Answer "yes" if the number is even, otherwise answer "no".');
};

export default startEvenGame;
