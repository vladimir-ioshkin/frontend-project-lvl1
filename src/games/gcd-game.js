import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'Find the greatest common divisor of given numbers.';

function getGcd(a, b) {
  return b ? getGcd(b, a % b) : a;
}

const getQuestion = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const result = getGcd(firstNumber, secondNumber);

  return {
    question: `${firstNumber} ${secondNumber}`,
    result: String(result),
  };
};

const startGcdGame = () => {
  startGame(getQuestion, task);
};

export default startGcdGame;
