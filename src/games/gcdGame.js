import { gcd, getNumber } from '../functions/mathFunctions';
import startAnyGame from '../functions/main';

const startGcdGame = () => {
  const startWelcome = 'Find the greatest common divisor of given numbers.\n';
  const num1 = getNumber(2, 50);
  const num2 = getNumber(1, 30);
  const answer = gcd(num1, num2);
  const question = `${num1} ${num2}`;

  startAnyGame(startWelcome, question, answer);
};
export default startGcdGame;
