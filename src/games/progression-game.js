import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const MIN_INDEX = 0;
const MAX_INDEX = 9;

const getProgression = (start, step, count) => {
  const arr = [start];

  for (let i = 1; i < count; i += 1) {
    arr[i] = arr[i - 1] + step;
  }

  return arr;
};

const getQuestion = () => {
  const start = getRandomNumber();
  const progStep = getRandomNumber();
  const hiddenNumber = getRandomNumber(MIN_INDEX, MAX_INDEX);
  const arr = getProgression(start, progStep, MAX_INDEX + 1);
  const result = arr[hiddenNumber];

  arr[hiddenNumber] = '..';

  const questionStr = arr.join(' ');

  return {
    question: questionStr,
    result: String(result),
  };
};

const startProgressionGame = () => {
  startGame(getQuestion, 'What number is missing in the progression?');
};

export default startProgressionGame;
