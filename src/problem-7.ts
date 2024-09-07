/* 
Problem: 7
Create a TypeScript function logString that takes a parameter of type unknown and uses a type guard to check whether the parameter is of type string. If it is, log the string to the console. If it is not, log an error message.
*/


const logString = (para: unknown): void => {
    if(typeof para === "string"){
        console.log(para);
    }else{
        console.log(`Invaild  input!`);
    }
};

logString("Hello, TypeScript!");

logString(42)