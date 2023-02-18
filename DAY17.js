/* 
Scrimba mascot Pumpkin has won the grand prize at an international 
cat show. Below are Pumpkin's scores from the judges, as well as all the 
prizes he's won. In all the excitement of victory,
they've become a jumbled mess of nested arrays. Let's 
help Pumpkin by sorting it out. 

Write a function to flatten nested arrays of strings or
numbers into a single array. There's a method
for this, but pratice both doing it manually and using the method. 

Example input: [1, [4,5], [4,7,6,4], 3, 5]
Example output: [1, 4, 5, 4, 7, 6, 4, 3, 5]
*/

const kittyScores = [
    [39, 99, 76], 89, 98, [87, 56, 90], 
    [96, 95], 40, 78, 50, [63]
];

const kittyPrizes = [
    ["💰", "🐟", "🐟"], "🏆", "💐", "💵", ["💵", "🏆"],
    ["🐟","💐", "💐"], "💵", "💵", ["🐟"], "🐟"
];

// Manual implementation
const flatten = arr => {
    if(arr.length === 0) return arr
    const firstElement = arr.at(0)
    const flattenedTail = flatten(arr.slice(1))
    if(Array.isArray(firstElement)) return [...firstElement].concat(flattenedTail)
    return [firstElement].concat(flattenedTail)
} 

// Using Javascript's built-in method
// const flatten = arr => arr.flat()

console.log(flatten(kittyPrizes));
console.log(flatten(kittyScores));

/*
function manualFlatten(arr){
    if (arr.length === 0){
        return arr
    } else{
        const flattenedArr = []
        for (let subArr of arr){
            if(Array.isArray(subArr)){
                for (let subSubArr of subArr){
                    flattenedArr.push(subSubArr)
                }
            }else{
                flattenedArr.push(subArr)
            }
        }
        for(let subArr of flattenedArr)
        {
            if(Array.isArray(subArr)){
                manualFlatten(flattenedArr);
            }
        }
        return flattenedArr
    }
}
*/

/* 
function flatten(arr) {
    return arr.reduce((flat, item) =>
        [...flat, ...Array.isArray(item) ? flatten(item) : [item]], []);
}
*/

/*
// recursively flattens an array of any depth
const flatten = (arr) => {
  return arr.reduce((acc, val) => {
    return acc.concat(Array.isArray(val) ? flatten(val) : val);
  }, []);
};
*/

// function flatten(arr) {
//     let prizes = [];
//     for (let i = 0; i < arr.length; i++) {
//         if (Array.isArray(arr[i])) {
//             prizes = prizes.concat(flatten(arr[i]));
//         }
//         else {
//             prizes.push(arr[i]);
//         }
//     }
//     return prizes;
// }
