import readlineSync from 'readline-sync';
import getIsPrime from '../helpers/get-is-prime.js';
import startGame from '../index.js';

const MAX_NUMBER = 100;

const getQuestion = () => {
  const number = Math.floor(Math.random() * MAX_NUMBER);
  const isPrime = getIsPrime(number);

  console.log(`Question: ${number}`);
  const answer = readlineSync.question('Your answer: ');

  if ((isPrime && answer === 'yes') || (!isPrime && answer === 'no')) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isPrime ? 'yes' : 'no'}'.`);
  return false;
};

const startPrimeGame = () => {
  startGame(getQuestion, 'Answer "yes" if given number is prime. Otherwise answer "no".');
};

export default startPrimeGame;
