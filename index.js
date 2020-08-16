const anagramChecker = (str1, str2) => {
  const str1WithoutSpaceCharacter = str1.toLowerCase().split(" ").join("");
  const str2WithoutSpaceCharacter = str2.toLowerCase().split(" ").join("");

  const sortedStr1 = str1WithoutSpaceCharacter.split("").sort().join("");
  const sortedStr2 = str2WithoutSpaceCharacter.split("").sort().join("");

  if (sortedStr1 !== sortedStr2) {
    return false;
  }

  return true;
};

console.log(
  anagramChecker("McDonald's restaurants", "Uncle Sam's standard rot")
);
