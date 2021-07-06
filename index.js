#!/usr/bin/env node
const program = require('commander');
const chalk = require('chalk'); // colored output
const clipboardy = require('clipboardy'); //copy text to clipboard
const createPassword = require('./utils/createPassword');
const savePassword = require('./utils/savePassword');

//console.log(process.argv);

//cmd: node index -h
program
  .version('1.0.0')
  .description('Simple Password Generator')
  // .program.command('generate')
  // .action(() => {
  //   console.log('Generated');
  // })
  .option('-l, --length <number>', 'length of password', '8')
  .option('-s, --save', 'save password to password.txt')
  .option('-nn, --no-numbers', 'remove numbers')
  .option('-ns, --no-symbols', 'remove symbols')
  .parse();

//our command line arguments options: node index
console.log(program.opts()); // { length: '8', numbers: true, symbols: true }

const { length, save, numbers, symbols } = program.opts();

// Get generated password
const generatedPassword = createPassword(length, numbers, symbols);

// Save to file
if (save) {
  savePassword(generatedPassword);
  console.log(chalk.green('Password saved to passwords.txt'));
}

// Copy to clipboard
clipboardy.writeSync(generatedPassword);

// Output generated password
console.log(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword));
console.log(chalk.yellow('Password copied to clipboard'));
