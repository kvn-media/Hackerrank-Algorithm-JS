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
 * Complete the 'breakingRecords' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY scores as parameter.
 */

function breakingRecords(scores) {
    // Write your code here
    var highest = scores[0];
    var lowest = scores[0];
    var highCount = 0;
    var lowCount = 0;
    for(var i=1; i<scores.length; i++){
        if(scores[i]>highest){
            highest = scores[i];
            highCount++;
        } else if(scores[i] < lowest){
            lowest = scores[i];
            lowCount++;
        }
    }
    return [highCount, lowCount]
    // Preparing variables
    // let [ hi, lo ] = [ scores[0], scores[0] ];
    // let [ max, min ] = [ 0, 0 ];

    // // Calculating
    // for (let i = 1; i < scores.length; i++) {
	//     if (scores[i] > hi) { hi = scores[i]; max++; }
	//     if (scores[i] < lo) { lo = scores[i]; min++; }
    // }
    // //Returning
    // return [ max, min ];
}

function main() {
    const ws = fs.createWriteStream(process.env.OUTPUT_PATH);

    const n = parseInt(readLine().trim(), 10);

    const scores = readLine().replace(/\s+$/g, '').split(' ').map(scoresTemp => parseInt(scoresTemp, 10));

    const result = breakingRecords(scores);

    ws.write(result.join(' ') + '\n');

    ws.end();
}

// function breakingRecords(scores) {
//     var highest = scores[0];
//     var lowest = scores[0];
//     var highCount = 0;
//     var lowCount = 0;
//     for(var i=1; i<scores.length; i++){
//         if(scores[i]>highest){
//             highest = scores[i];
//             highCount++;
//         } else if(scores[i] < lowest){
//             lowest = scores[i];
//             lowCount++;
//         }
//     }
//     return [highCount, lowCount]
// }