// brute force
// time complexity- o(n^2) space complexity- o(1)
// let arr = [-7, 1, 5, 2, -4, 3, 0];
// function equilibrium(arr) {
//   for (var i = 0; i < arr.length; ++i) {
//     let ls = 0;
//     let rs = 0;
//     for (var j = 0; j < i ; j++) {
//       ls = ls + arr[j];
//     }
//     for (var j = i + 1; j < arr.length; j++) {
//       rs = rs + arr[j];
//     }
//     if (ls == rs) {
//       return i;
//     }
//   }
//   return -1;
// }
// console.log(equilibrium(arr));

// --------------------------------------optimize--------------------------------------------
// timecomplexity-o(n)  space complexity-o(n)

// function equilibrium(arr) {
//     const n = arr.length;
  
//     // Precompute the left sums
//     const leftSums = new Array(n).fill(0);
//     let leftSum = 0;
//     for (let i = 0; i < n; i++) {
//       leftSum += arr[i];
//       leftSums[i] = leftSum;
//     }
  
//     // Precompute the right sums
//     const rightSums = new Array(n).fill(0);
//     let rightSum = 0;
//     for (let i = n - 1; i >= 0; i--) {
//       rightSum += arr[i];
//       rightSums[i] = rightSum;
//     }
  
//     // Check for equilibrium index
//     for (let i = 0; i < n; i++) {
//       if (leftSums[i] === rightSums[i]) {
//         return i;
//       }
//     }
  
//     return -1;
//   }
  
//   let arr = [-7, 1, 5, 2, -4, 3, 0];
//   console.log(equilibrium(arr));

// ------------------------------optimize Tc-o(n) Sc-o(1)--------------------

function equilibrium(arr) {
    let sum = 0;
    let leftSum = 0;
  
    // Calculate the total sum
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  
    // Iterate through the array to find the equilibrium index
    for (let i = 0; i < arr.length; i++) {
      sum -= arr[i]; // Subtract the current element from the total sum
      if (leftSum === sum) {
        return i; // Equilibrium index found
      }
      leftSum += arr[i]; // Add the current element to the left sum
    }
  
    return -1; // No equilibrium index found
  }
  
  let arr = [-7, 1, 5, 2, -4, 3, 0];
  console.log(equilibrium(arr));
  
  