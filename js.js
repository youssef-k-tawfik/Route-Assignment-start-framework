const s = "(){}[]";
const validBraces = {
  "(": ")",
  "{": "}",
  "[": "]",
};
function stringIsValid(s) {
  const arr = s.split("");
  let isValid;
  for (let i = 0; i < arr.length; i += 2) {
    const currentBrace = arr[i];
    const nextBrace = validBraces[currentBrace];
    // switch (currentBrace) {
    //   case "(":
    //     nextBrace = ")";
    //     break;
    //   case "{":
    //     nextBrace = "}";
    //     break;
    //   case "[":
    //     nextBrace = "]";
    //     break;
    //   default:
    //     return false;
    // }
    if (arr[i + 1] === nextBrace) isValid = true;
    else isValid = false;
  }
  return isValid;
}
console.log(stringIsValid(s));
