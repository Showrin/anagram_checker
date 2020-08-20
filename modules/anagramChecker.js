const anagramChecker = (str1, str2) => {
  const str1WithoutSpaceCharacter = str1.toLowerCase().split(" ").join("");
  const str2WithoutSpaceCharacter = str2.toLowerCase().split(" ").join("");

  const sortedStr1 = str1WithoutSpaceCharacter.split("").sort().join("");
  const sortedStr2 = str2WithoutSpaceCharacter.split("").sort().join("");

  return sortedStr1 === sortedStr2;
};

export default anagramChecker;
