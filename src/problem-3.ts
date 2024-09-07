/* 
Problem: 3
Create a TypeScript function filterEvenNumbers that takes an array of numbers and returns a new array containing only the even numbers from the original array.
*/

type FilterEvenNumbers = (nums: number[]) => number[]

const filterEvenNumbers: FilterEvenNumbers = (nums) => {
    const evenNums: number[] = [];
    for(const num of nums){
        if(num % 2 === 0){
            evenNums.push(num);
        }
    }
    return evenNums;
}

const res = filterEvenNumbers([1, 2, 3, 4, 5, 6])
console.log(res);