//5. Can you use return instead of break in loops?

let array = [];

for(let i=0;i<5;i++){
  console.log(i)  
  array[i] = i;
  if(i==2)
  {
    break;
  }
}
// Output => 0 1 2

console.log("Using Break array is: ",array); // Using Break array is:  [ 0, 1, 2 ]

for(let i=0;i<5;i++){
  console.log(i)
  array[i] = i;
  if(i==2)
  {
    return;
  }
}
// Output => 0 1 2

console.log(" After return: ", array); // Unable to reach the array

// Conclusion:
// Return statement exits from the block but we cannot reach to modified array in it (which was accessible by break).
