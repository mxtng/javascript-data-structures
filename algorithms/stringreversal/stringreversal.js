// string reversal

// recursive method
function reverseRecursive(str) {
  if (!str) return "";
  return reverse(str.slice(1)) + str.charAt(0);
}

// built-in method
function reverse(str) {
  const arr = str.split("");
  const reverseStr = arr.reverse().join("");

  return reverseStr;
}

