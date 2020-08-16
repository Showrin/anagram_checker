const chalk = require("chalk");

const test = (testDescription, testFunction, expectedValue) => {
  const receivedValue = testFunction;

  if (receivedValue === expectedValue) {
    console.log(chalk.green(`✔  ${testDescription}`));
  } else {
    console.log(chalk.red(`✘  ${testDescription}`));
    console.log(
      chalk.green(`\tExpected: ${expectedValue} \n`),
      chalk.red(`\tReceived: ${receivedValue}`)
    );
  }

  return null;
};

module.exports = test;
