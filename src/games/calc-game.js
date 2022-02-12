import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'What is the result of the expression?';

const operators = ['+', '-', '*'];
const minIndex = 0;
const maxIndex = operators.length - 1;

const calculateResult = (firstNumber, secondNumber, operator) => {
  switch (operator) {
    case '+':
      return firstNumber + secondNumber;

    case '-':
      return firstNumber - secondNumber;

    case '*':
      return firstNumber * secondNumber;

    default:
      throw new Error(`Unknown operator: '${operator}'!`);
  }
};

const getQuestion = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const randomOperator = operators[getRandomNumber(minIndex, maxIndex)];
  const result = calculateResult(firstNumber, secondNumber, randomOperator);

  return {
    question: `${firstNumber} ${randomOperator} ${secondNumber}`,
    result: String(result),
  };
};

const startCalcGame = () => {
  startGame(getQuestion, task);
};

export default startCalcGame;
