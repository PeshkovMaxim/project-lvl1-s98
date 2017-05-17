#!/usr/bin/env nodejs
import { readlineSync } from  'readline-sync';
import questions  from  '..'
console.log('Welcome to the Brain Games!');
const userName = readlineSync.question('May I have user name?: ');
questions(userName);
