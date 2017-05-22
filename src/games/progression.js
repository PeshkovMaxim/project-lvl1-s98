import { cons } from 'hexlet-pairs';
import { getNumber, progression } from '../utils';
import startAnyGame from '..';

const startProgressionGame = () => {
  const startWelcome = 'What number is missing in this progression?\n';
  const generator = () => {
    const d = getNumber(1, 10);
    const a = getNumber(1, 20);
    const exp = 10;
    const randomQuestion = getNumber(1, 10);
    const firstProg = progression(a, d, exp);
    const answer = firstProg[randomQuestion];
    const secondProg = firstProg;
    secondProg[randomQuestion] = '..';
    const question = secondProg;
    return cons(question, answer);
  };
  startAnyGame(startWelcome, generator);
};
export default startProgressionGame;
