import anagramChecker from "./modules/anagramChecker.js";

const form = document.getElementById("js-form");
const stringInput1 = document.getElementById("js-str1");
const stringInput2 = document.getElementById("js-str2");
const output = document.getElementById("js-output");
const successTextClass = "anagram-checker__output--success";
const failureTextClass = "anagram-checker__output--danger";

const addAndRemoveClasses = (element, classToAdd, classToRemove) => {
  element.classList.remove(classToRemove);
  element.classList.add(classToAdd);

  return null;
};

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const string1 = stringInput1.value;
  const string2 = stringInput2.value;

  if (anagramChecker(string1, string2)) {
    if (string1 === "" || string2 === "") {
      addAndRemoveClasses(output, successTextClass, failureTextClass);
      output.innerHTML = "As both strings are empty, they are anagram";
    } else {
      addAndRemoveClasses(output, successTextClass, failureTextClass);
      output.innerHTML = `"${string1}" and "${string2}" are anagram`;
    }
  } else {
    if (string1 === "" || string2 === "") {
      addAndRemoveClasses(output, failureTextClass, successTextClass);
      output.innerHTML = "As one string is empty, they are not anagram";
    } else {
      addAndRemoveClasses(output, failureTextClass, successTextClass);
      output.innerHTML = `"${string1}" and "${string2}" are not anagram`;
    }
  }
});

export default null;
