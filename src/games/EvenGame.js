import readlineSync from 'readline-sync';

export const getNumber = (min, max) => Math.floor(Math.random() * (max - min)) + min;

export const startEvenGame = () => {
  console.log(`Welcome to the Brain Games!
Answer "yes" if number even otherwise answer "no".\n`);

  const userName = readlineSync.question('May I have user name?: ');
  console.log(`Hi, ${userName}!`);
  const startGame = (acc) => {
    if (acc === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
    const numQn = getNumber(2, 200);
    console.log(`\nQuestion:${numQn}`);
    const getAnswer = readlineSync.question('Your answer: ');
    console.log(getAnswer);
    if (getAnswer !== 'yes' && getAnswer !== 'no') {
      return console.log(`'${getAnswer}' is wrong answer ;(. Correct answer was 'yes' or 'no'.`);
    }
    if (getAnswer === 'yes' && numQn % 2 === 0) {
      console.log('Correct!');
    }
    if (getAnswer === 'no' && numQn % 2 !== 0) {
      console.log('Correct!');
    }
    if (getAnswer === 'no' && numQn % 2 === 0) {
      return console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
    }
    if (getAnswer === 'yes' && numQn % 2 !== 0) {
      return console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    }
    return startGame(acc + 1);
  };
  startGame(0);
};
