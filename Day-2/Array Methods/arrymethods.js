// let arr=[1,2,3,4,5]
// arr.push('six') //add the value to end [1,2,3,4,5,'six']
// arr.pop() // last value is removed from the end [1,2,3,4]

// arr.shift() // first value is removed from the start //[2,3,4,5]
// arr.unshift("Zero") // add the value to start  // ["Zero",1,2,3,4,5]
// console.log(arr)

//*******************************concat*************************
// let arr1=[1,2,3,4,5]
// let arr2=[6,7,8]
// // concat
// let arr3=arr1.concat(arr2)
// // spread operator
// let arr4=[...arr1,...arr2]
// console.log(arr1) // [1,2,3,4,5]
// console.log(arr2) // [6,7,8]
// console.log(arr3) // [1,2,3,4,5,6,7,8]
// console.log(arr4) // [1,2,3,4,5,6,7,8]

//****************************** slice **************************************

// it will take start index and end index(it is exclusive i.e., not included)

// let arr1= [0,1,2,3,4,5,6,7,8,9]
// let arr2=arr1.slice(0,6)
// console.log(arr2)
// console.log(arr1)

// let fruits=['apple','banana','orange','grape']
// let citrusFruits=fruits.slice(1,3)
// console.log(citrusFruits)

// ******************************lastIndexOf*********************************

// let arr1=[0,1,2,3,4,5,6,7,8,3]

// console.log(arr1.indexOf(3))
// console.log(arr1.lastIndexOf(3))

// can you use indexOf and lastIndexOf to find out if there are any duplicates of num in the array

// let num =3
// console.log(arr1.indexOf(num))
// console.log(arr1.lastIndexOf(num))
// here if indexOf and lastIndexOf values are different then it is duplicate

// ********************************includes*****************************

// the includes method checks if an array includes a certain element and returns true or false. it likes checking if a specific ingredient exists in a recipe.
// it will check whethere the value is present or not and return true or false

// let arr1=[0,1,2,3,4,5,6,7,8,3]
// console.log(arr1.includes(4))
// console.log(arr1.includes(44))

// ************************************join*****************************
// let arr1=[0,1,2,3]
// let arr2=arr1.join('---')
// let arr3=arr1.join(',')
// console.log(arr2,arr3)

// ************************************reverse*****************************
//  it is reverse the array

// *************************splice*************************************
// splice : this method changes the contents of an array by removing,replacing or adding elements.
//           It takes three parameters: the start index,the number of elements to remove,and optional elements to add.
//            It's like modifying a specific portion of an array.


// let arr1=[0,1,2,3,4,5,6,7,8]
// remove and adding the elements
// let arr2=arr1.splice(2,3,"two","three","four")
// remove the numbers from array using splice
// let arr3=arr1.splice(2,3)
// remove all the elements 
// let arr4=arr1.splice(2)
// remove from last
// let arr5=arr1.splice(-5,3)
// console.log(arr2)
// console.log(arr1)
// console.log(arr3)
// console.log(arr1)
// console.log(arr4)
// console.log(arr1)
// console.log(arr5)
// console.log(arr1)

