"use strict";
/* Given a time in -hour AM / PM format, convert it to military(24 - hour) time.
    Note: Midnight is 12: 00: 00AM on a 12 - hour clock, and 00: 00: 00 on a 24 - hour clock.Noon is 12: 00: 00PM on a 12 - hour clock, and 12: 00: 00 on a 24 - hour clock.
Function Description
Complete the timeConversion function in the editor below.It should return a new string representing the input time in 24 hour format.
timeConversion has the following parameter(s):
s: a string representing time in hour format
Input Format
A single string  containing a time in -hour clock format(i.e.: or), where  and.
    Constraints
All input times are valid
Output Format
Convert and print the given time in -hour format, where.
Sample Input 0
07: 05: 45PM
Sample Output 0
19: 05: 45 */
exports.__esModule = true;
function timeConversion(s) {
    var suffix = s.substring(s.length - 2, s.length);
    var milTimeArr = s.substring(0, s.length - 2).split(":");
    switch (suffix) {
        case ('PM'):
            if (milTimeArr[0] === "12") {
                return (milTimeArr.join(':'));
            }
            else {
                milTimeArr[0] = ((Number(milTimeArr[0]) + 12).toString());
                return milTimeArr.join(':');
            }
        case ('AM'):
            if (milTimeArr[0] === "12") {
                milTimeArr[0] = '00';
                return milTimeArr.join(':');
            }
            else {
                return milTimeArr.join(':');
            }
        default:
            return console.log('Oopsie poopsie');
            ;
    }
}
exports.timeConversion = timeConversion;
/* Complete the countApplesAndOranges function.
It should print the number of apples and oranges that land on Sam's house,
each on a separate line.

countApplesAndOranges has the following parameter(s):
s: integer, starting point of Sam's house location.
t: integer, ending location of Sam's house location.
a: integer, location of the Apple tree.
b: integer, location of the Orange tree.
apples: integer array, distances at which each apple falls from the tree.
oranges: integer array, distances at which each orange falls from the tree.

Constraints

Output Format

Print two integers on two different lines:

The first integer: the number of apples that fall on Sam's house.
The second integer: the number of oranges that fall on Sam's house.
Sample Input 0

7 11
5 15
3 2
    - 2 2 1
5 - 6

Sample Output 0
1
1

*/
function countApplesAndOranges(s, t, a, b, apples, oranges) {
    var relevantFruits = function (fruits, position) {
        return fruits.filter(function (c) {
            var finalPosition = position + c;
            return (s <= finalPosition && finalPosition <= t);
        }).length;
    };
    return console.log(relevantFruits(apples, a) + "\n" + relevantFruits(oranges, b));
}
exports.countApplesAndOranges = countApplesAndOranges;
/* Function Description

Complete the function kangaroo in the editor below. It should return YES if they reach the same position at the same time, or NO if they don't.

kangaroo has the following parameter(s):

x1, v1: integers, starting position and jump distance for kangaroo 1
x2, v2: integers, starting position and jump distance for kangaroo 2

*/
function kangaroo(x1, v1, x2, v2) {
    if (v1 < v2) {
        return 'NO';
    }
    var distanceBetween = x2 - x1;
    var jumpDifference = Math.abs(v1 - v2);
    var overlap = distanceBetween % jumpDifference === 0;
    switch (overlap) {
        case (true):
            return 'YES';
        case (false):
            return 'NO';
        default:
            return null;
    }
}
exports.kangaroo = kangaroo;
/* You will be given two arrays of integers and asked to determine all integers that satisfy the following two conditions:

The elements of the first array are all factors of the integer being considered
The integer being considered is a factor of all elements of the second array
These numbers are referred to as being between the two arrays. You must determine how many such numbers exist.

*/
function getTotalX(a, b) {
    // min and max values for range
    var min = a[a.length - 1];
    var max = b[0];
    //range array contains possible valid integers
    var possibleRange = Array.from({ length: max - min + 1 }, function (x, i) { return min + i; });
    // function for pairing down valid ints in range
    var intCheck = function (numbers, incRange, criteria) {
        var prunedRange;
        var testRange;
        numbers.forEach(function (n, i) {
            // logic to use incoming range for first pass, then pruned range thereafter
            if (i === 0) {
                testRange = incRange;
            }
            else {
                testRange = prunedRange;
            }
            prunedRange = testRange.filter(function (r) {
                if (criteria === 1) {
                    return r % n === 0;
                }
                else if (criteria === 2) {
                    return n % r === 0;
                }
            });
        });
        // after all pruning on nonvalid ints
        return prunedRange;
    };
    // the elements of the first array are all factors of valid integer in range
    var aCheckRange = intCheck(a, possibleRange, 1);
    // valid integers in range must be factors of all elements of the second array
    var finalRange = intCheck(b, aCheckRange, 2);
    return finalRange.length;
}
exports.getTotalX = getTotalX;
;
/* Problem: Maria plays college basketball and wants to go pro. Each season she
maintains a record of her play. She tabulates the number of times she breaks her
 season record for most points and least points in a game. Points scored in the
 first game establish her record for the season, and she begins counting from there.

For example, assume her scores for the season are represented in the array .
Scores are in the same order as the games played. She would tabulate her results
as follows:

Complete the breakingRecords function in the editor below. It must return an
integer array containing the numbers of times she broke her records. Index
is for breaking most points records, and index  is for breaking least points
records.

breakingRecords has the following parameter(s):

scores: an array of integers*/
function breakingRecords(scores) {
    //based on first game performance
    var records = [scores[0], scores[0]];
    //none for min or max at beginning of season
    var recordChanges = [0, 0];
    //checks each score to see if it breaks a record
    scores.forEach(function (c) {
        // checking to see if game score is a new max or new min
        if (c > records[0]) {
            records.shift();
            records.unshift(c);
            return recordChanges[0]++;
        }
        else if (c < records[1]) {
            records.pop();
            records.push(c);
            return recordChanges[1]++;
        }
    });
    return recordChanges;
}
exports.breakingRecords = breakingRecords;
;
/* Lily has a chocolate bar that she wants to share it with Ron for his birthday.
 Each of the squares has an integer on it. She decides to share a contiguous
 segment of the bar selected such that the length of the segment matches Ron's
  birth month and the sum of the integers on the squares is equal to his birth
   day. You must determine how many ways she can divide the chocolate.

Function Description

Complete the birthday function in the editor below. It should return an integer
 denoting the number of ways Lily can divide the chocolate bar.

birthday has the following parameter(s):

s: an array of integers, the numbers on each of the squares of chocolate
d: an integer, Ron's birth day
m: an integer, Ron's birth month*/
function birthday(s, d, m) {
    var divisions = 0;
    for (var i = 0; i < s.length; i++) {
        var segmentSum = s.slice(i, i + m)
            .reduce(function (acc, c) { return acc + c; });
        if (segmentSum === d) {
            divisions++;
        }
    }
    return divisions;
}
exports.birthday = birthday;
//same function as a class for practice
var birthdayBarCutter = /** @class */ (function () {
    function birthdayBarCutter(s, d, m) {
        this.validSegments = 0;
        this.s = s;
        this.d = d;
        this.m = m;
        this.validSegments = this.getValidSegments();
    }
    birthdayBarCutter.prototype.getValidSegments = function () {
        var _a = this, s = _a.s, getSegmentSum = _a.getSegmentSum, m = _a.m, checkSegmentSum = _a.checkSegmentSum, d = _a.d;
        var validSegmentsCounter = 0;
        for (var i = 0; i < s.length; i++) {
            var segmentSum = getSegmentSum(i, s, m);
            validSegmentsCounter += checkSegmentSum(segmentSum, d);
        }
        return validSegmentsCounter;
    };
    birthdayBarCutter.prototype.getSegmentSum = function (index, arr, month) {
        return arr.slice(index, index + month)
            .reduce(function (acc, c) { return acc + c; });
    };
    birthdayBarCutter.prototype.checkSegmentSum = function (sum, day) {
        if (sum === day) {
            return 1;
        }
        else {
            return 0;
        }
    };
    return birthdayBarCutter;
}());
exports.birthdayBarCutter = birthdayBarCutter;
