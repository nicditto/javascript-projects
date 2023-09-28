/*Exercise #1: Construct for loops that accomplish the following tasks:
    a. Print the numbers 0 - 20, one number per line.
    b. Print only the ODD values from 3 - 29, one number per line.
    c. Print the EVEN numbers 12 to -14 in descending order, one number per line.
    d. Challenge - Print the numbers 50 - 20 in descending order, but only if the numbers are multiples of 3. (Your code should work even if you replace 50 or 20 with other numbers). */
for (i = 0; i <= 21; i++){ // A
  console.log(i);
}

for (j = 3; j <= 29; j++){ //B
  if (j % 2 != 0) {
    console.log(j);
  }
}

for (let k = 12; k >= -14; k-=2) { //C
  console.log(k);
}

for (let l = 48; l >= 18; l--){
  if( l % 3 === 0){
    console.log(l);
  }


}
//*Exercise #2: 
//Initialize two variables to hold the string “LaunchCode” and the array [1, 5, ‘LC101’, ‘blue’, 42].

let programD = "LaunchCode";
let rando1 = [ 1, 5, 'LC101', 'blue', 42];

//Construct ``for`` loops to accomplish the following tasks:
 // a. Print each element of the array to a new line.
 // b. Print each character of the string - in reverse order - to a new line. */ 

for ( let m = 0; m < rando1.length; m++){ // A
  //console.log(rando1[m]);
}

for (let n = 9; n < programD.length; n--) { //B
 // console.log(programD[n])
  if(n < 0){
    //break;
  }
}



/*Exercise #3:Construct a for loop that sorts the array [2, 3, 13, 18, -5, 38, -10, 11, 0, 104] into two new arrays:
  a. One array contains the even numbers, and the other holds the odds.
  b. Print the arrays to confirm the results. */

  let arr1 = [2, 3, 13, 18, -5, 38, -10, 11, 0, 104]
  let arr2 = []
  let arr3 = []
  for (o = 0; o < arr1.length; o++){
    if(arr1[o] % 2 != 0){
      console.log(arr1[o]);
    }
  }