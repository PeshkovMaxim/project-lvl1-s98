import { cons } from 'hexlet-pairs';
import { getNumber, prime } from '../functions/mathFunctions';
import startAnyGame from '../functions/main';

const startPrimeGame = () => {
  const startWelcome = 'Answer "yes" if number even otherwise answer "no".\n';
  const generator = () => {
    const numQn = getNumber(2, 20);
    const answer = prime(numQn);
    return cons(numQn, answer);
  };
  startAnyGame(startWelcome, generator);
};
export default startPrimeGame;
