import { cons } from 'hexlet-pairs';
import { gcd, getNumber } from '../utils';
import startAnyGame from '..';

const startGcdGame = () => {
  const startWelcome = 'Find the greatest common divisor of given numbers.\n';
  const generator = () => {
    const num1 = getNumber(2, 50);
    const num2 = getNumber(1, 30);
    return cons(`${num1} ${num2}`, gcd(num1, num2));
  };
  startAnyGame(startWelcome, generator);
};
export default startGcdGame;
