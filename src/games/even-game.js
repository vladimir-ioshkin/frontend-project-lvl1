import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'Answer "yes" if the number is even, otherwise answer "no".';

const getIsEven = (num) => num % 2 === 0;

const getQuestion = () => {
  const number = getRandomNumber(1, 100);
  const isEven = getIsEven(number);
  const result = isEven ? 'yes' : 'no';

  return {
    question: number,
    result,
  };
};

const startEvenGame = () => {
  startGame(getQuestion, task);
};

export default startEvenGame;
