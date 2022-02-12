import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const task = 'What number is missing in the progression?';

const minCount = 5;
const maxCount = 10;
const minHiddenElPosition = 1;

const getProgression = (start, step, count) => {
  const progression = [start];

  for (let i = 1; i < count; i += 1) {
    progression[i] = progression[i - 1] + step;
  }

  return progression;
};

const getQuestion = () => {
  const start = getRandomNumber();
  const step = getRandomNumber();
  const count = getRandomNumber(minCount, maxCount);
  const progression = getProgression(start, step, count);
  const hiddenElPosition = getRandomNumber(minHiddenElPosition, count);
  const hiddenElIndex = hiddenElPosition - 1;
  const result = progression[hiddenElIndex];

  progression[hiddenElIndex] = '..';

  const questionStr = progression.join(' ');

  return {
    question: questionStr,
    result: String(result),
  };
};

const startProgressionGame = () => {
  startGame(getQuestion, task);
};

export default startProgressionGame;
