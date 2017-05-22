import { cons } from 'hexlet-pairs';
import { getNumber, prime } from '../utils';
import startAnyGame from '..';

const startPrimeGame = () => {
  const startWelcome = 'Answer "yes" if number prime otherwise answer "no".\n';
  const generator = () => {
    const numQn = getNumber(2, 20);
    const answer = prime(numQn);
    return cons(numQn, answer);
  };
  startAnyGame(startWelcome, generator);
};
export default startPrimeGame;
