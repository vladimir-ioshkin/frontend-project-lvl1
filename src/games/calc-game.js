import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const calculateResult = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;

    case '-':
      return firstNumber - secondNumber;

    case '*':
      return firstNumber * secondNumber;

    default:
      return null;
  }
};

const getQuestion = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const symbolsArr = ['+', '-', '*'];
  const randomSymbol = symbolsArr[Math.floor(Math.random() * symbolsArr.length)];
  const result = calculateResult(firstNumber, secondNumber, randomSymbol);

  return {
    question: `${firstNumber} ${randomSymbol} ${secondNumber}`,
    result: String(result),
  };
};

const startCalcGame = () => {
  startGame(getQuestion, 'What is the result of the expression?');
};

export default startCalcGame;
