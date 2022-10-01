// program yang dibuat untuk, check sebuah kata apakah palindrome atau bukan
function palindrome(str) {
  var re = /[\W_]/g;
  var lowRegStr = str.toLowerCase().replace(re, "");
  var reverseStr = lowRegStr.split("").reverse().join("");
  return reverseStr === lowRegStr;
}

console.log(palindrome("eye")); 
console.log(palindrome("kocak"));

// created byhaki