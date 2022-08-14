'use strict';

const fs = require('fs');

process.stdin.resume();
process.stdin.setEncoding('utf-8');

let inputString = '';
let currentLine = 0;

process.stdin.on('data', function(inputStdin) {
    inputString += inputStdin;
});

process.stdin.on('end', function() {
    inputString = inputString.split('\n');

    main();
});

function readLine() {
    return inputString[currentLine++];
}

/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let AMPM = s.slice(-2);
    let timeArr = s.slice(0, -2).split(":");
    
    if (AMPM === "AM" && timeArr[0] === "12") {
        // catching edge-case of 12AM
        timeArr[0] = "00";
    } else if (AMPM === "PM") {
        // everything with PM can just be mod'd and added with 12 - the max will be 23
        timeArr[0] = (timeArr[0] % 12) + 12
    }
    
    return timeArr.join(":");
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const s = readLine();

    const result = timeConversion(s);

    ws.write(result + '\n');

    ws.end();
}

// function timeConversion(s) {
//     const time = `${s.slice(0, s.length - 2)} ${s.slice(-2)}`;
//     const d = new Date(`2020-05-05 ${time}`);

//     return new Intl.DateTimeFormat('en-US', {
//         hour12: false,
//         hour: 'numeric', minute: 'numeric', second: 'numeric',
//         timeStyle: 'medium'
//     }).format(d)
// }