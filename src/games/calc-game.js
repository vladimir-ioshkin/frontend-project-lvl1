import readlineSync from 'readline-sync';

const getQuestion = () => {
  const firstNumber = Math.floor(Math.random() * 20);
  const secondNumber = Math.floor(Math.random() * 20);
  const symbolsArr = ['+', '-', '*'];
  const randomSymbol = symbolsArr[Math.floor(Math.random() * symbolsArr.length)];

  console.log(`Question: ${firstNumber} ${randomSymbol} ${secondNumber}`);

  let result;
  switch (randomSymbol) {
    case '+':
      result = firstNumber + secondNumber;
      break;

    case '-':
      result = firstNumber - secondNumber;
      break;

    case '*':
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
  console.log('Welcome to the Brain Games!');
  const userName = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${userName}!`);

  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
    if (getQuestion() === false) {
      console.log(`Let's try again, ${userName}!`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
};

export default startCalcGame;
