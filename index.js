const { timeConversion, birthdayBarCutter } = require('./JavaScript/HackerRank');

console.log("Expect time of 19:05:45 \n", timeConversion("07:05:45PM"));

const cutter = new birthdayBarCutter([1,2,3,2,1],3,2);
console.log(cutter);
console.log(cutter.checkSegmentSum(2,2));