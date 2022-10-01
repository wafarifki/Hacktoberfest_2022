const a = 'Radar';
const b = 'Malam';
const c = 'Kasur ini rusak';
const d = 'Ibu Ratna antar ubi';
const e = 'Malas';
const f = 'Makan nasi goreng';
const g = 'Balonku ada lima';

function isPalindrome(str){
    let lowStr = str.toLowerCase()
    let arrStr = lowStr.split('').reverse().join("")
    return (lowStr === arrStr)
}   

console.log(isPalindrome(a))
console.log(isPalindrome(b))
console.log(isPalindrome(c))
console.log(isPalindrome(d))
console.log(isPalindrome(e))
console.log(isPalindrome(f))
console.log(isPalindrome(g))
