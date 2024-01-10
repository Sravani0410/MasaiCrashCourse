function findProductArray(arr) {
    const n = arr.length;
    const product = new Array(n);
    let temp = 1;
  
    // Forward pass
    for (let i = 0; i < n; i++) {
      product[i] = temp;
      temp *= arr[i];
    }
  
    // Reset temp for the backward pass
    temp = 1;
  
    // Backward pass
    for (let i = n - 1; i >= 0; i--) {
      product[i] *= temp;
      temp *= arr[i];
    }
  
    return product;
  }
  
  const arr = [1, 2, 3, 4];
  const result = findProductArray(arr);
  console.log(result);
  