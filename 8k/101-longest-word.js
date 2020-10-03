longestWord = (str) => {
  let words = str.split(" ");
  let longest = "";
  for (let word of words) {
    if (word.length > longest.length) {
      longest = word;
    }
  }
  return longest;
};
console.log(
  longestWord("What? My name is Who? My name is Chika-chika Slim Shady")
);
