import readlineSync from 'readline-sync';
import startGame from '../index.js';

const getQuestion = () => {
  const number = Math.floor(Math.random() * 100);
  console.log(`Question: ${number}`);
  const isEven = number % 2 === 0;
  const answer = readlineSync.question('Your answer: ');
  if ((isEven && answer === 'yes') || (!isEven && answer === 'no')) {
    console.log('Correct!');
    return true;
  }
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven ? 'yes' : 'no'}'.`);
  return false;
};

const startEvenGame = () => {
  startGame(getQuestion, 'Answer "yes" if the number is even, otherwise answer "no".');
};

export default startEvenGame;
