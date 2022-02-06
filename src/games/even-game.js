import getIsEven from '../helpers/get-is-even.js';
import startGame from '../index.js';

const MAX_NUMBER = 100;

const getQuestion = () => {
  const number = Math.floor(Math.random() * MAX_NUMBER);
  const isEven = getIsEven(number);
  const result = isEven ? 'yes' : 'no';

  return {
    question: number,
    result,
  };
};

const startEvenGame = () => {
  startGame(getQuestion, 'Answer "yes" if the number is even, otherwise answer "no".');
};

export default startEvenGame;
