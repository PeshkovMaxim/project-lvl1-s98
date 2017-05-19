import readlineSync from 'readline-sync';
import { getNumber } from '../functions/mathFunctions';
import startAnyGame from '../functions/main';

const startEvenGames = () => {
  const logic = () => {
    const numQn = getNumber(2, 200);
    console.log(`\nQuestion:${numQn}`);
    const getAnswer = readlineSync.question('Your answer: ');
    console.log(getAnswer);
    if (getAnswer !== 'yes' && getAnswer !== 'no') {
      console.log(`'${getAnswer}' is wrong answer ;(. Correct answer was 'yes' or 'no'.`);
      return false;
    }
    if (getAnswer === 'yes' && numQn % 2 === 0) {
      return console.log('Correct!');
    }
    if (getAnswer === 'no' && numQn % 2 !== 0) {
      return console.log('Correct!');
    }
    if (getAnswer === 'no' && numQn % 2 === 0) {
      console.log("'no' is wrong answer ;(. Correct answer was 'yes'.");
      return false;
    }
    if (getAnswer === 'yes' && numQn % 2 !== 0) {
      console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
      return false;
    }
    return false;
  };
  const startWelcome = 'Answer "yes" if number even otherwise answer "no".\n';
  startAnyGame(logic, startWelcome);
};
export default startEvenGames;
