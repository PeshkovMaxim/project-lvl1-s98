import { cons } from 'hexlet-pairs';
import { getNumber, getBalance, dataToString } from '../functions/mathFunctions';
import startAnyGame from '../functions/main';

const startBalanceGame = () => {
  const startWelcome = 'Balance the given number.\n';
  const generator = () => {
    const numQn = getNumber(20, 300);
    const sum = numQn.toString().split('');
    const balance = getBalance(sum);
    const question = numQn;
    const answer = dataToString(balance);
    return cons(question, answer);
  };
  startAnyGame(startWelcome, generator);
};
export default startBalanceGame;
