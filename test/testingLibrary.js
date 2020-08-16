const test = (testDescription, testFunction, expectedValue) => {
  const receivedValue = testFunction;

  if (receivedValue === expectedValue) {
    console.log(`✔  ${testDescription}`);
  } else {
    console.log(`✘  ${testDescription}`);
    console.log(`\tExpected: ${expectedValue} \n\tReceived: ${receivedValue}`);
  }

  return null;
};

module.exports = test;
