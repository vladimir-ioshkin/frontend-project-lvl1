const getRandomNumber = (min = 1, max = 20) => Math.floor(Math.random() * (max + 1 - min)) + min;

export default getRandomNumber;
