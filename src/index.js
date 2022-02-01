// import readlineSync from 'readline-sync';

// const getRandom = () => {
//   const number = Math.floor(Math.random() * 100);
//   console.log(`Question: ${number}`);
//   const isEven = number % 2 === 0;
//   const answer = readlineSync.question('Your answer: ');
//   if ((isEven && answer === 'yes') || (!isEven && answer === 'no')) {
//     console.log('Correct!');
//     return true;
//   }
//   console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isEven ? 'yes' : 'no'}'.`);
//   return false;
// };

// const startEvenGame = () => {
//   console.log('Welcome to the Brain Games!');
//   const userName = readlineSync.question('May I have your name?: ');
//   console.log(`Hello, ${userName}!`);

//   console.log('Answer "yes" if the number is even, otherwise answer "no".');
//   for (let i = 0; i < 3; i += 1) {
//     if (getRandom() === false) {
//       console.log(`Let's try again, ${userName}!`);
//       return;
//     }
//   }
//   console.log(`Congratulations, ${userName}!`);
// };

// export default startEvenGame;
