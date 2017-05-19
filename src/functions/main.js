import readlineSync from 'readline-sync';

const startAnyGame = (functions, message) => {
  console.log('Welcome to the Brain Games!');
  console.log(message);
  const userName = readlineSync.question('May I have user name?: ');
  console.log(`Hi, ${userName}!`);

  const startGame = (func, acc) => {
    if (acc === 3) {
      return console.log(`Congratulations, ${userName}!`);
    }

    if (func() === false) {
      return console.log('end game');
    }
    return startGame(func, acc + 1);
  };
  startGame(functions, 0);
};
export default startAnyGame;
