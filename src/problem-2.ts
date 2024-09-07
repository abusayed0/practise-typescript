/* 
Problem: 2
Design a TypeScript function findLargestNumber that takes an array of numbers and returns the largest number in the array.
 */

type FindLargestNumber = (numbers: number[]) => number


const findLargestNumber: FindLargestNumber = (numbers) => {
    let largestNum:number = numbers[0];
    for (const number of numbers) {
        if(number > largestNum){
            largestNum = number;
        }
    }
    return largestNum;
}

const result:number = findLargestNumber([10, 5, 8, 20, 3]);
console.log(result);