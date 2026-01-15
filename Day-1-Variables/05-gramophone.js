/*
Day 1 - Variables
Exercise: 05. Gramophone

Instructions:
- Run this file with Node.js: node "05. Gramophone.js"
- Read the code and try to understand what it does
- Modify or complete the exercise as needed

Hint: Check console.log outputs to verify your solution
*/


function solve(bandName, albumName, song) {
  let songDuration = (albumName.length * bandName.length * song.length) / 2;

  let rotateTimes = Math.ceil(songDuration / 2.5);
  console.log(`The plate was rotated ${rotateTimes} times.`);
}
solve("Black Sabbath", "Paranoid", "War Pigs");
