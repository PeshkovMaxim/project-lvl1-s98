import  readlineSync  from  'readline-sync';

const  helloFunc = () => {
  const userName = readlineSync.question('May I have user name?: ');
  return console.log(`Hi ${userName}!`);
} ;
export default helloFunc;
