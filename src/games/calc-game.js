import startGame from '../index.js';

const PLUS = '+';
const MINUS = '-';
const MULTIPLE = '*';
const MAX_NUMBER = 20;

const getQuestion = () => {
  const firstNumber = Math.floor(Math.random() * MAX_NUMBER);
  const secondNumber = Math.floor(Math.random() * MAX_NUMBER);
  const symbolsArr = [PLUS, MINUS, MULTIPLE];
  const randomSymbol = symbolsArr[Math.floor(Math.random() * symbolsArr.length)];

  let result;
  switch (randomSymbol) {
    case PLUS:
      result = firstNumber + secondNumber;
      break;

    case MINUS:
      result = firstNumber - secondNumber;
      break;

    case MULTIPLE:
      result = firstNumber * secondNumber;
      break;

    default:
      result = null;
  }

  return {
    question: `${firstNumber} ${randomSymbol} ${secondNumber}`,
    result: String(result),
  };
};

const startCalcGame = () => {
  startGame(getQuestion, 'What is the result of the expression?');
};

export default startCalcGame;
