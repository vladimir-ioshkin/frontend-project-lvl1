import startGame from '../index.js';
import getRandomNumber from '../utils.js';

function getIsPrime(num) {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
}

const getQuestion = () => {
  const number = getRandomNumber(1, 100);
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
