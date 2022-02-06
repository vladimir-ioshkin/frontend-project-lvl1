import readlineSync from 'readline-sync';
import startGame from '../index.js';
import getGcd from '../helpers/get-gcd.js';

const MAX_NUMBER = 20;

const getQuestion = () => {
  const firstNumber = Math.floor(Math.random() * MAX_NUMBER);
  const secondNumber = Math.floor(Math.random() * MAX_NUMBER);

  console.log(`Question: ${firstNumber} ${secondNumber}`);

  const result = getGcd(firstNumber, secondNumber);

  const answer = readlineSync.question('Your answer: ');
  if (result === Number(answer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
  return false;
};

const startGcdGame = () => {
  startGame(getQuestion, 'Find the greatest common divisor of given numbers.');
};

export default startGcdGame;
