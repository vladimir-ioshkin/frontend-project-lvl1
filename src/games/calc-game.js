import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const operators = ['+', '-', '*'];

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
  const randomOperator = operators[Math.floor(Math.random() * operators.length)];
  const result = calculateResult(firstNumber, secondNumber, randomOperator);

  return {
    question: `${firstNumber} ${randomOperator} ${secondNumber}`,
    result: String(result),
  };
};

const startCalcGame = () => {
  startGame(getQuestion, 'What is the result of the expression?');
};

export default startCalcGame;
