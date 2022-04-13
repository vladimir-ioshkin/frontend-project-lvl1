import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (num) => num % 2 === 0;

const getQuestion = () => {
  const number = getRandomNumber(1, 100);

  return {
    question: number,
    result: isEven(number) ? 'yes' : 'no',
  };
};

const startEvenGame = () => {
  startGame(getQuestion, task);
};

export default startEvenGame;
