import readlineSync from 'readline-sync';
import { gcd, getNumber } from '../functions/mathFunctions';
import startAnyGame from '../functions/main';

const startGcdGame = () => {
  const logic = () => {
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
      console.log(`'${getAnswer}' is wrong answer ;(. Try later.`);
      return false;
    }
    return null;
  };
  const startWelcome = 'Find the greatest common divisor of given numbers.\n';
  startAnyGame(logic, startWelcome);
};
export default startGcdGame;
