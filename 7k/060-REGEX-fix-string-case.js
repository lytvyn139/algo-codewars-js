//https://www.codewars.com/kata/5b180e9fedaa564a7000009a/train/javascript

// solve("coDE") = "code". Upper == lowercase. Change all to lowercase.
// solve("coDe") = "code". Lowercase characters > uppercase. Change only the "D" to lowercase.
// solve("CODe") = "CODE". Uppercase characters > lowecase. Change only the "e" to uppercase.
const solve = (s) => {
  const stringSplitted = [...s];
  const lowercaseChars = stringSplitted.filter(
    (char) => char === char.toLowerCase()
  ).length;
  const uppercaseChars = stringSplitted.filter(
    (char) => char === char.toUpperCase()
  ).length;
  if (lowercaseChars > uppercaseChars)
    return s.replace(/[A-Z]/g, (char) => char.toLowerCase());
  if (uppercaseChars > lowercaseChars)
    return s.replace(/[a-z]/g, (char) => char.toUpperCase());
  if (uppercaseChars === lowercaseChars) return s.toLowerCase();
};
