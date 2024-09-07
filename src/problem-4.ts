/* 
Problem: 4
Design a TypeScript function reverseArray that takes an array of any type and returns a new array with its elements reversed. Use generics to define types.
*/

type ReverseArray = <T> (arr:T[]) => T[]


const reverseArray: ReverseArray = (arr) => {
    
    return arr.reverse();
}

const res = <number[]>reverseArray([10, 20, 30]);

console.log(res);