import startGame from '../index.js';
import getGcd from '../helpers/get-gcd.js';

const MAX_NUMBER = 20;

const getQuestion = () => {
  const firstNumber = Math.floor(Math.random() * MAX_NUMBER);
  const secondNumber = Math.floor(Math.random() * MAX_NUMBER);
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
