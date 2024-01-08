
// function majorityElement(nums) {
//     const n = nums.length;

//     for (let i = 0; i < n; i++) {
//         let count = 1;

//         for (let j = i + 1; j < n; j++) {
//             if (nums[i] === nums[j]) {
//                 count++;
//             }
//         }

//         if (count > n / 2) {
//             return nums[i];
//         }
//     }
// }

// // Example 1
// const nums1 = [3, 2, 3];
// const result1 = majorityElement(nums1);
// console.log(`Example 1: ${result1}`);

// // // Example 2
// // // const nums2 = [2, 2, 1, 1, 1, 2, 2];
// // // const result2 = majorityElement(nums2);
// // // console.log(`Example 2: ${result2}`);

let arr = [1, 2, 4, 4, 5, 6, 6, 6, 1, 2, 2, 2, 2];

// Step 1: Sort the array
arr.sort((a, b) => a - b);

// Step 2: Find the middle element
const middleIndex = Math.floor(arr.length / 2);
const majorityElementCandidate = arr[middleIndex];

// Step 3: Check if the middle element is the majority element
let count = 0;
for (let i = 0; i < arr.length; i++) {
  if (arr[i] === majorityElementCandidate) {
    count++;
  }
}

if (count > arr.length / 2) {
  console.log(majorityElementCandidate);
} else {
  console.log("No majority element");
}

