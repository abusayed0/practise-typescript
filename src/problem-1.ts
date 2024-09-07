/* 
Problem: 1
Design a TypeScript function repeatString that takes two parameters: a string and a number. The function should return a new string that repeats the input string the specified number of times.
*/

type RepeatString = (str: string, num: number) => string

const repeatString: RepeatString = (str, num) => {

    let newStr: string = str;

    for (let i = 1; i < num; i++) {
        newStr += str;
    }

    return newStr;
}

const res = repeatString("Hello!", 4);
console.log(res);