import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const isPrime = (num) => {
  for (let i = 2, s = Math.sqrt(num); i <= s; i += 1) {
    if (num % i === 0) return false;
  }
  return num > 1;
};

const getQuestion = () => {
  const number = getRandomNumber(1, 100);

  return {
    question: number,
    result: isPrime(number) ? 'yes' : 'no',
  };
};

const startPrimeGame = () => {
  startGame(getQuestion, task);
};

export default startPrimeGame;
