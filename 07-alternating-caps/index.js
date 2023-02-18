/* Alternating Caps 
 Write a function that takes in a string of letters
 and returns a sentence in which every other letter is capitalized.

Example input: "I'm so happy it's Monday"
Example output: "I'M So hApPy iT'S MoNdAy"
*/

function altCaps(str){
    let newStr = '';
    
    for(let i = 0; i < str.length; i++){
        let char = str[i];
        char = i % 2 === 0 ? char.toUpperCase() : char.toLowerCase();
        newStr += char;
    }
    
    return newStr;
}

console.log(altCaps("I'm so happy it's Monday"));
console.log(altCaps("When you visit Portland you have to go to VooDoo Donuts"));