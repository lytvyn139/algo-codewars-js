//https://www.codewars.com/kata/529eef7a9194e0cbc1000255/train/javascript

let test = "Bucketheadde";
let original = "DeathCubeK";

const sortWord = (string) => string.toLowerCase().split("").sort().join();
const isAnagram = (test, original) => sortWord(test) === sortWord(original);

// (isAnagram("Buckethead", "DeathCubeK"), true, 'The word Buckethead is an anagram of DeathCubeK')
// (isAnagram("foefet", "toffee"), true, 'The word foefet is an anagram of toffee')
// (isAnagram("Twoo", "WooT"), true, 'The word Twoo is an anagram of
// (isAnagram("dumble", "bumble"), false, 'Characters do not match for test case dumble, bumble')
// (isAnagram("ound", "round"), false, 'Missing characters for test case ound, round')
// (isAnagram("apple", "pale"), false, 'Same letters, but different count')
