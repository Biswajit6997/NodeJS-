// console.log('Hey!! I am biswajit');
//we can access the another modeule into one module by require methods

const math=require('./math')
// console.log('Math is:'+math);


// Another approach

console.log('Addition is :'+math.add(3,4));
console.log('Sub is is :'+math.sub(3,4));//programme receive from math.js and function name is sub

// const math=require("crypto")// build in package
// console.log(math);
