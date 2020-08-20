import anagramChecker from "./anagramChecker";

describe("Tests for anagram_checker function", () => {
  test("Should be anagram", () => {
    expect(anagramChecker("bleat", "table")).toBe(true);
  });

  test("Should not be anagram", () => {
    expect(anagramChecker("eat", "tar")).toBe(false);
  });

  test("Should not be anagram when there is an empty string", () => {
    expect(anagramChecker("lamp", "")).toBe(false);
  });

  test("Should be anagram despite two strings are empty", () => {
    expect(anagramChecker("", "")).toBe(true);
  });

  test("Should be anagram when two strings are similar", () => {
    expect(anagramChecker("life", "life")).toBe(true);
  });

  test("Should be anagram despite symbols are used", () => {
    expect(anagramChecker("m* $a) n", "$n) am*")).toBe(true);
  });

  test("Should be anagram despite two strings are of different lengths", () => {
    expect(anagramChecker("man", "n m a")).toBe(true);
  });

  test("Should be anagram despite characters have different cases", () => {
    expect(anagramChecker("LIfe", "File")).toBe(true);
  });
});
