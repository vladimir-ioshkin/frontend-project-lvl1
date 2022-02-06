import getIsPrime from '../helpers/get-is-prime.js';
import startGame from '../index.js';

const MAX_NUMBER = 100;

const getQuestion = () => {
  const number = Math.floor(Math.random() * MAX_NUMBER);
  const isPrime = getIsPrime(number);

  return {
    question: number,
    result: isPrime ? 'yes' : 'no',
  };
};

const startPrimeGame = () => {
  startGame(getQuestion, 'Answer "yes" if given number is prime. Otherwise answer "no".');
};

export default startPrimeGame;
