//https://www.codewars.com/kata/51f2b4448cadf20ed0000386/javascript
function removeUrlAnchor(url) {
  let result = [];
  for (let i = 0; i < url.length; i++) {
    if (url[i] !== "#") {
      result.push(url[i]);
    } else break;
  }
  return result.join("");
}

function removeUrlAnchor(url) {
  return url.split("#")[0];
}

function removeUrlAnchor(url) {
  // TODO: complete
  return url.replace(/#.*/gi, "");
}
