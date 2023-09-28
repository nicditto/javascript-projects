// Make a Line
function makeLine(size) {
    let line = '';
    for (let i = 0; i < size; i++){
        line += '#'
    }
    return line;
}
//console.log(makeLine(5));

// Make a Square
function makeSquare(size) {
    let square = '';
    for (let i = 0; i < size; i++){
        square += `${makeLine(size)} \n`
    }
    return square.slice(0,-1) // removes the extra line at the end
}
//console.log(makeSquare(5, -1));
// Make Square Rewrite
function makeSquare2(size) {
  makeRectangle(size, size)
}
// Make a Rectangle
function makeRectangle(width, height) { // height determines the number of iterations of the line we are creating
    let rectangle = '';
    for (let i = 0; i < height; i++) {
      rectangle += (makeLine(width) + '\n');
    }
    return rectangle.slice(0, -1);
  }

  // Make Downward Stairs
  function makeDownwardStairs(height) {
    let stairs = '';
    for (let i = 0; i < height; i++) {
      stairs += (makeLine(i+1) + '\n'); // i+1 adds one to each iteration
    }
    return stairs.slice(0, -1);
  }

  //Make Space Line

  function makeSpaceLine(numSpaces, numChars) {
    let spaces = "";
    for (let i = 0; i < numSpaces; i++){
      spaces += " ";
    }
    let chars = makeLine(numChars);
    
    return `${spaces}${chars}${spaces}`
  }

  // Make Isosceles Triangle
  function reverse(str) { // added from previous in the chapter
    let reversed = '';

    for (let i = 0; i < str.length; i++) {
        reversed = str[i] + reversed;
    }

    return reversed;
}
  function makeIsoscelesTriangle(height) {
    let triangle = '';
    for (let i = 0; i < height; i++) {
      triangle += (makeSpaceLine(height - i - 1, 2*i + 1) + '\n'); // arguments called to put in
    }
    return triangle.slice(0, -1);
  }

 console.log(makeIsoscelesTriangle(3))

 // Diamond

 function makeDiamond(height) {
  let diamond = "";
  let topHalf = makeIsoscelesTriangle(height);
  let bottomHalf = reverse(topHalf);
 }