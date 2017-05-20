import readlineSync from 'readline-sync';
import { car, cdr } from 'hexlet-pairs';

const startAnyGame = (message, generator) => {
  console.log('Welcome to the Brain Games!');
  console.log(message);
  const name = readlineSync.question('May I have user name?: ');
  console.log(`Hi, ${name}!`);

  const startGame = (func, acc) => {
    const game = generator();
    const question = car(game);
    const answer = cdr(game);
    //console.log(answer);
    if (acc === 3) {
      return console.log(`Congratulations, ${name}!`);
    }
    console.log(`\nQuestion: ${question}`);
    const getAnswer = readlineSync.question('Your answer: ');
    if (getAnswer === `${answer}`) {
      console.log('Correct!');
    }
    if (getAnswer !== `${answer}`) {
      return console.log(`'${getAnswer}' is wrong answer ;(. Try later.`);
    }
    if (getAnswer !== `${answer}` && getAnswer !== 'no') {
      return console.log(`'${getAnswer}' is wrong answer ;(. Correct answer was 'yes' or 'no'.`);
    }
    return startGame(generator, acc + 1);
  };
  return startGame(generator, 0);
};
export default startAnyGame;
