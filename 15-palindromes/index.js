/* 
Palindromes are words that are the same forward or backward. For example, 
the words "noon" and "kayak" are a palindromes.
 
Write a function to check if a lowercased string of letters is a palindrome. 
If the word is palidrome, return true. If it isn't, return false. 
*/

function isPalindrome(str){
    return str === str.split("").reverse().join("");
}

// Test your function
console.log(isPalindrome("abba"));
console.log(isPalindrome("civic"));
console.log(isPalindrome("octopus"));
console.log(isPalindrome("pumpkins"));
console.log(isPalindrome("madam"));

// Alternate solutions
/*
function isPalindrome(str){
    const lcStr = Array.from(str.toLowerCase().replaceAll(/\s/g, ''));
    const len = lcStr.length;
    const m = Math.trunc(len / 2);
    
    for (let i = 0; i < m; i++) {
        if (lcStr.shift() != lcStr.pop())
            return false;
    }
    return true;
    
}
console.log(isPalindrome("A man a plan a canal Panama"));
*/

/*
function isPalindrome(str){
    const len = str.length;

    for(let i = 0; i < len/2; i++)
    {
        if (str[i] !== str[len-i-1])
            return false;
    }
    return true;  
}
*/