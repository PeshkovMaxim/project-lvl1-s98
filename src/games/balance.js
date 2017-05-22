import { cons } from 'hexlet-pairs';
import { getNumber, getBalance, dataToString, dataToNumber } from '../utils';
import startAnyGame from '..';

const startBalanceGame = () => {
  const startWelcome = 'Balance the given number.\n';
  const generator = () => {
    const numQn = getNumber(100, 2000);
    const numToString = numQn.toString().split('');
    const arrayNunber = dataToNumber(numToString);
    const balance = getBalance(arrayNunber);
    const question = numQn;
    const answer = dataToString(balance);
    return cons(question, answer);
  };
  startAnyGame(startWelcome, generator);
};
export default startBalanceGame;
