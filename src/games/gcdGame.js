import readlineSync from 'readline-sync';
import getNumber from '../functions/getNumber';
import gcd from '../functions/gcdFunc';

const startGcdGame = () => {
  console.log(`Welcome to the Brain Games!
Find the greatest common divisor of given numbers.\n`);

  const userName = readlineSync.question('May I have user name?: ');
  console.log(`Hi, ${userName}!`);


  const startGame = (acc) => {
    if (acc === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
    const num1 = getNumber(2, 50);
    const num2 = getNumber(1, 30);
    const gcdConst = gcd(num1, num2);
    const printSum = `${num1} ${num2}`;
    console.log(`\nQuestion: ${printSum}`);
    const getAnswer = readlineSync.question('Your answer: ');
    if (getAnswer === `${gcdConst}`) {
      console.log('Correct!');
    }
    if (getAnswer !== `${gcdConst}`) {
      return console.log(`'${getAnswer}' is wrong answer ;(. Try later.`);
    }
    return startGame(acc + 1);
  };
  startGame(0);
};
export default startGcdGame;
