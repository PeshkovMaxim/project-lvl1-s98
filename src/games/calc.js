import { cons } from 'hexlet-pairs';
import { getNumber } from '../utils';
import startAnyGame from '..';


const startCalcGame = () => {
  const startWelcome = 'Answer "yes" if number even otherwise answer "no".\n';
  const generator = () => {
    const constOperation = '+-*';
    const numQn = getNumber(1, 3);
    const num1 = getNumber(2, 50);
    const num2 = getNumber(3, 100);
    const operator = constOperation[numQn];
    let answer = 0;
    let question = '';
    switch (operator) {
      case '+':
        answer = num1 + num2;
        question = `${num1} + ${num2}`;
        return cons(question, answer);
      case '-':
        answer = num1 - num2;
        question = `${num1} - ${num2}`;
        return cons(question, answer);
      case '*':
        answer = num1 * num2;
        question = `${num1} * ${num2}`;
        return cons(question, answer);
      default:
        break;
    }
    return null;
  };
  startAnyGame(startWelcome, generator);
};
export default startCalcGame;
