import readlineSync from 'readline-sync';

const startAnyGame = (message, question, answer, acc) => {
  console.log('Welcome to the Brain Games!');
  console.log(message);
  const name = readlineSync.question('May I have user name?: ');
  console.log(`Hi, ${name}!`);
  if (acc === 3) {
    return console.log(`Congratulations, ${name}!`);
  }
  console.log(`\nQuestion: ${question}`);
  const getAnswer = readlineSync.question('Your answer: ');
  if (getAnswer === `${answer}`) {
    console.log('Correct!');
  }
  if (getAnswer !== `${answer}`) {
    console.log(`'${getAnswer}' is wrong answer ;(. Try later.`);
    return false;
  }
  return true;
};
export default startAnyGame;
