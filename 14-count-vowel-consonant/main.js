/*
You are given a string s that consists of only lowercase English letters. If vowels ('a', 'e', 'i', 'o', and 'u') are given a value of 1 and consonants are gven a value of 2, return the sum of the letters in the input string.

example:
for s = "abcde", the output should be
countVowelConsonant(s) = 8.

Hints:
split()
reduce()
*/
function countVowelConsonant(str) {
    return str.split('').reduce((acc, cv) => {
        let value = 2;
        if('aeiou'.includes(cv)) value = 1;
        return acc+value;
    }, 0);
  }
  
  
  /**
  * Test Suite 
  */
  describe('countVowelConsonant()', () => {
      it('returns total of vowels(1) and consonants(2) to be added', () => {
          // arrange
          const value = 'abcde';
          
          // act
          const result = countVowelConsonant(value);
  
          // log
          console.log("result: ", result);
          
          // assert
          expect(result).toBe(8);
      });
  });