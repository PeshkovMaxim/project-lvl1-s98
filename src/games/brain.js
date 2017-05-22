import readlineSync from 'readline-sync';
import startBalanceGame from './balance';
import startEvenGame from './even';
import startCalcGame from './calc';
import startPrimeGame from './prime';
import startProgressionGame from './progression';
import startGcdGame from './gcd';

const startBrainGames = () => {
  console.log('What game do you want to play?\n');
  console.log('1. brain-balance\n2. brain-even\n3. brain-calc\n4. brain-gcd\n5. brain-prime\n6. brain-progression\n');
  const choice = readlineSync.question('Please choose from the list and write the number : ');
  if (choice === '1') {
    startBalanceGame();
  }
  if (choice === '2') {
    startEvenGame();
  }
  if (choice === '3') {
    startCalcGame();
  }
  if (choice === '4') {
    startGcdGame();
  }
  if (choice === '5') {
    startPrimeGame();
  }
  if (choice === '6') {
    startProgressionGame();
  }
};
export default startBrainGames;
