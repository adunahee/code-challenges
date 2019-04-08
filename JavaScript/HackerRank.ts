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

exports.timeConversion = function (s: string) {
    const suffix = s.substring(s.length - 2, s.length);
    let milTimeArr = s.substring(0, s.length - 2).split(":");
    switch (suffix) {
        case ('PM'):
            if (milTimeArr[0] === "12") {
                return (milTimeArr.join(':'));
            } else {
                milTimeArr[0] = ((Number(milTimeArr[0]) + 12).toString());
                return milTimeArr.join(':');
            }
        case ('AM'):
            if (milTimeArr[0] === "12") {
                milTimeArr[0] = '00';
                return milTimeArr.join(':');
            } else {
                return milTimeArr.join(':');
            }
        default:
            return console.log('Oopsie poopsie');;
    }
}

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

exports.countApplesAndOranges = (s, t, a, b, apples, oranges) => {
    const relevantFruits = (fruits, position) => {
        return fruits.filter(c => {
            const finalPosition = position + c;
            return (s <= finalPosition && finalPosition <= t)
        }).length;
    }
    return console.log(
        `${relevantFruits(apples, a)}\n${relevantFruits(oranges, b)}`)
}

/* Function Description

Complete the function kangaroo in the editor below. It should return YES if they reach the same position at the same time, or NO if they don't.

kangaroo has the following parameter(s):

x1, v1: integers, starting position and jump distance for kangaroo 1
x2, v2: integers, starting position and jump distance for kangaroo 2

*/

exports.kangaroo = (x1, v1, x2, v2) => {
    if(v1 < v2){
        return 'NO';
    }
    const distanceBetween = x2 - x1;
    const jumpDifference = Math.abs(v1 - v2);
    let overlap = distanceBetween%jumpDifference === 0;
    switch(overlap) {
        case(true):
            return 'YES';
        case(false):
            return 'NO';
        default:
            return null;
    }
}