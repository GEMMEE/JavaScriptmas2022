/* Panic function 
Write a PANIC! function. The function should take in a sentence and return the same
sentence in all caps with an exclamation point (!) at the end. Use JavaScript's
built in string methods. 

If the string is a phrase or sentence, add a 😱 emoji in between each word. 

Example input: "Hello"
Example output: "HELLO!"

Example input: "I'm almost out of coffee"
Example output: "I'M 😱 ALMOST 😱 OUT 😱 OF 😱 COFFEE!"

Hint: split() and join()
*/


// The Solution Function
const panic = sentence => {
    // Transform uppercase the entire sentence
    sentence = sentence.toUpperCase();
    sentence += '!';

    // Returning if it's a word
    if (!sentence.includes(' ')) return sentence;

    // Creating array on every space
    const sentenceArr = sentence.split(' ');
    // Converting to String again with 😱 emoji in between
    return sentenceArr.join(' 😱 ');
}

// Alternative Solution
const panic2 = s => s.split(' ').join(' 😱 ').toUpperCase() + '!';

// Test your function
// console.log(panic("I'm almost out of coffee")); 
// console.log(panic("winter is coming"))

// Change the argument to test
const testPhrase = panic("try me out");
console.log(testPhrase);
console.log(panic2("bye"));