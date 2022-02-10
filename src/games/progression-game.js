import startGame from '../index.js';
import getRandomNumber from '../utils.js';

const minIndex = 0;
const maxIndex = 9;

const getProgression = (start, step, count) => {
  const progression = [start];

  for (let i = 1; i < count; i += 1) {
    progression[i] = progression[i - 1] + step;
  }

  return progression;
};

const getQuestion = () => {
  const start = getRandomNumber();
  const progStep = getRandomNumber();
  const hiddenNumber = getRandomNumber(minIndex, maxIndex);
  const progression = getProgression(start, progStep, maxIndex + 1);
  const result = progression[hiddenNumber];

  progression[hiddenNumber] = '..';

  const questionStr = progression.join(' ');

  return {
    question: questionStr,
    result: String(result),
  };
};

const startProgressionGame = () => {
  startGame(getQuestion, 'What number is missing in the progression?');
};

export default startProgressionGame;
