// -----------------method 1---------------------
// function checkPalindrome(N, str) {
//     var res = "";
//     for (var i = N - 1; i >= 0; i--) {
//         res = res + str[i];
//     }
//     if (res === str) {
//       console.log("Yes");
//     } else {
//       console.log("No");
//     }
//   }

//-----------------   method-2   -------------------
function checkPalindrome(N, str) {
    //write code here
   for(var i = 0; i < N / 2; i++) { 
     if (str[i] != str[N - i - 1]){
        console.log("No")
        return; 
     }
     else{
        console.log("Yes")
        return
     }
   } 
}
  // Example usage:
  const inputString = "radar";
  const length = inputString.length;
  checkPalindrome(length, inputString);
  

