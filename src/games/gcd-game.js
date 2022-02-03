import readlineSync from 'readline-sync';
import startGame from '../index.js';
import gcd from '../helpers/gcd.js';

const getQuestion = () => {
  const firstNumber = Math.floor(Math.random() * 20);
  const secondNumber = Math.floor(Math.random() * 20);

  console.log(`Question: ${firstNumber} ${secondNumber}`);

  const result = gcd(firstNumber, secondNumber);

  const answer = readlineSync.question('Your answer: ');
  if (result === Number(answer)) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${result}'.`);
  return false;
};

const startGcdGame = () => {
  startGame(getQuestion, 'Find the greatest common divisor of given numbers.');
};

export default startGcdGame;
