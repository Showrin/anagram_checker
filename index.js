import anagramChecker from "./modules/anagramChecker.js";

const form = document.getElementById("js-form");
const stringInput1 = document.getElementById("js-str1");
const stringInput2 = document.getElementById("js-str2");
const output = document.getElementById("js-output");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const string1 = stringInput1.value;
  const string2 = stringInput2.value;

  if (anagramChecker(string1, string2)) {
    if (string1 === "" || string2 === "") {
      output.innerText = "As both strings are empty, they are anagram";
    } else {
      output.innerText = `"${string1}" and "${string2}" are anagram`;
    }
  } else {
    if (string1 === "" || string2 === "") {
      output.innerText = "As one string is empty, they are not anagram";
    } else {
      output.innerText = `"${string1}" and "${string2}" are not anagram`;
    }
  }
});

export default null;
