import test from "./testingLibrary.js";
import anagramChecker from "../modules/anagramChecker.js";

test("Should be anagram", anagramChecker("bleat", "table"), true);

test("Should not be anagram", anagramChecker("eat", "tar"), false);

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

test(
  "Should be anagram when two strings are similar",
  anagramChecker("life", "life"),
  true
);

test(
  "Should be anagram despite symbols are used",
  anagramChecker("m* $a) n", "$n) am*"),
  true
);

test(
  "Should be anagram despite two strings are of different lengths",
  anagramChecker("man", "n m a"),
  true
);

test(
  "Should be anagram despite characters have different cases",
  anagramChecker("LIfe", "File"),
  true
);
