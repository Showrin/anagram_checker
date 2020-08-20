# Anagram Checker

It's a simple program to check whether two strings are anagram or not.

<br/>

# Installation

Run the following command to install this package in your package.

```
yarn add @showrin/anagram_checker
```

<br/>

If you are using npm, then run the following command.

```
npm install @showrin/anagram_checker
```

<br/>

## Project Setup

Clone the repo first. To do so, go to the directory where you want to keep this repo. Then open the terminal from here and run the following command.

```
$ git clone git@github.com:Showrin/anagram_checker.git
```

<br/>

Then navigate to the repository using this command.

```
$ cd anagram_checker
```

<br/>

After cloning, if you are using **`yarn`**, install the required modules by running the following command.

```
$ yarn
```

<br/>

Or use the following command if you are using **`npm`**.

```
$ npm install
```

<br/>

Now open the **`index.html`** file with any browser and you will get the following UI. Here you can give two strings and pressing enter or pressing the button, you can check whether the given strings are anagram or not.

![Anagram Checker UI](https://i.imgur.com/ryHRyGD.png)

<br/>

## Dev Dependencies

This program has following development dependencies.

| Module Name      | Version | Why it's used                                                              |
| ---------------- | ------- | -------------------------------------------------------------------------- |
| babel-cli        | ^6.26.0 | It's being used for using ES6 import-export in node                        |
| babel-preset-env | ^1.7.0  | It's being used for using ES6 import-export in node                        |
| chalk            | ^4.1.0  | It's being used for making test-completion texts colorfull in the terminal |

<br/>

## Algorithm Explanation

- First convert all charaters to lowercase.
- Then remove all the space characters. (To do so, split strings by the space characters and join them. Now all the spaces have gone.)

- After that sort both strings.
- Then compare these two sorted strings.
- If they are anagram, they must be equal otherwise they are not anagram.

<br/>

## test( _testDescription, testFunction, expectedValue_ )

It doesn't return anything. But it's responsible for checking whether a test case passes or not and prints the test result in the console. It compares the return value of the `testFunction` and `expectedValue`. If both values are same, it will print the `testDescription` in the console with success color and indicator, Otherwise it will print the `testDescription` in the console with failure color and indicator.

#### Arguments

1. **`testDescription`** `(string)`: String that defines what a test is going to do.
2. **`testFunction`** `(function)`: Function where we write our test.
3. **`expectedValue`** `(any)`: Value that is matched with the return value of `testFunction`.

#### Returns

**`null`** : It returns a null object.

#### Example

```
test(
  "Should not be anagram when there is an empty string",
  anagramChecker("lamp", ""),
  false
);
```

#### Output

If your test fails, you will get the description with **red color** and with **the received** and **expected** value. Otherwise you will get the description with **green color**.

![Test Result](https://i.imgur.com/lxWKN7t.png)

<br/>

## Write and Run Tests

You can add your tests in **`./test/anagram_checker.test.js`** this file like the following:

```
test(
  "Should not be anagram when there is an empty string",
  anagramChecker("lamp", ""),
  false
);

test(
  "Should be anagram despite two strings are empty",
  anagramChecker("", ""),
  true
);
```

<br/>

After that you can run tests using this command in the console.

```
yarn test
```

<br/>

Or use the following if you are using npm.

```
npm test
```

<br/>

## Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

And your changes will be visible [https://epic-curran-723523.netlify.app/](https://epic-curran-723523.netlify.app/) here after getting merged into the master.

<br/>

## License

[MIT](https://choosealicense.com/licenses/mit/)
