import startGame from '../index.js';
import getRandomNumber from '../utils.js';

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
  startGame(getQuestion, 'Find the greatest common divisor of given numbers.');
};

export default startGcdGame;
