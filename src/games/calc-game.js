import readlineSync from 'readline-sync';
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

  console.log(`Question: ${firstNumber} ${randomSymbol} ${secondNumber}`);

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

  const answer = readlineSync.question('Your answer: ');
  if (result === Number(answer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
  return false;
};

const startCalcGame = () => {
  startGame(getQuestion, 'What is the result of the expression?');
};

export default startCalcGame;
