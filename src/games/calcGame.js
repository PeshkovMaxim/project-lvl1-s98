import readlineSync from 'readline-sync';
import { getNumber } from '../functions/mathFunctions';
import startAnyGame from '../functions/main';


const startCalcGame = () => {
  const logic = () => {
    const constOperation = '+-*';
    const numQn = getNumber(1, 3);
    const num1 = getNumber(2, 50);
    const num2 = getNumber(3, 100);
    const operator = constOperation[numQn];
    let sum = 0;
    let printSum = '';
    switch (operator) {
      case '+':
        sum = num1 + num2;
        printSum = `${num1} + ${num2}`;
        break;
      case '-':
        sum = num1 - num2;
        printSum = `${num1} - ${num2}`;
        break;
      case '*':
        sum = num1 * num2;
        printSum = `${num1} * ${num2}`;
        break;
      default:
        break;
    }
    console.log(`\nQuestion: ${printSum}`);
    const getAnswer = readlineSync.question('Your answer: ');
    if (getAnswer === `${sum}`) {
      console.log('Correct!');
    }
    if (getAnswer !== `${sum}`) {
      console.log(`'${getAnswer}' is wrong answer ;(. Try later.`);
      return false;
    } return null;
  };
  const startWelcome = 'Answer "yes" if number even otherwise answer "no".\n';
  startAnyGame(logic, startWelcome);
};
export default startCalcGame;
