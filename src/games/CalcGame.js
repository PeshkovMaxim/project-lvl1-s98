import readlineSync from 'readline-sync';
import getNumber from './GetNumber';


const startCalcGame = () => {
  console.log(`Welcome to the Brain Games!
What is the result of the expression?\n`);

  const userName = readlineSync.question('May I have user name?: ');
  console.log(`Hi, ${userName}!`);


  const startGame = (acc) => {
    if (acc === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }
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
      return console.log(`'${getAnswer}' is wrong answer ;(. Try later.`);
    }
    return startGame(acc + 1);
  };
  startGame(0);
};
export default startCalcGame;
