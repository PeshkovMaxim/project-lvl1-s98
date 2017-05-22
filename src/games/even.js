import { cons } from 'hexlet-pairs';
import { getNumber } from '../utils';
import startAnyGame from '..';

const startEvenGames = () => {
  const startWelcome = 'Answer "yes" if number even otherwise answer "no".\n';
  const generator = () => {
    const numQn = getNumber(2, 200);
    if (numQn % 2 !== 0) {
      const answer = 'no';
      return cons(numQn, answer);
    }
    if (numQn % 2 === 0) {
      const answer = 'yes';
      return cons(numQn, answer);
    }
    return null;
  };
  startAnyGame(startWelcome, generator);
};
export default startEvenGames;
